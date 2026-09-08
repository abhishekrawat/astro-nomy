/** Name just one visible, matching preview; duplicate names cancel transitions. */
type NavigationEntry = { url: string };
type PageTransitionEvent = Event & {
  viewTransition?: { finished: Promise<void> };
  activation?: { from?: NavigationEntry; entry?: NavigationEntry };
};
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const navigation = (window as Window & {
  navigation?: { activation?: { from?: NavigationEntry } };
}).navigation;

function matchPreview(url?: string) {
  if (!url) return;
  const slug = new URL(url, location.href).pathname.match(/^\/work\/([^/]+)\/?$/)?.[1];
  const currentSlug = location.pathname.match(/^\/work\/([^/]+)\/?$/)?.[1];
  // Next-story links connect different projects, so use the page crossfade.
  if (currentSlug && slug && currentSlug !== slug) return;
  const candidates = [...document.querySelectorAll<HTMLElement>('[data-project-preview]')]
    .filter(element => element.dataset.projectPreview === (currentSlug ?? slug))
    .map(element => ({ element, bounds: element.getBoundingClientRect() }))
    .filter(({ bounds }) => bounds.bottom > 0 && bounds.top < innerHeight && bounds.width > 0)
    .sort((a, b) => Math.abs(a.bounds.top) - Math.abs(b.bounds.top));
  return candidates[0]?.element;
}

function prepare(event: PageTransitionEvent, url?: string) {
  if (!event.viewTransition || reduceMotion.matches) return;
  const preview = matchPreview(url);
  if (!preview) return;
  preview.style.viewTransitionName = 'project-preview';
  const clear = () => preview.style.removeProperty('view-transition-name');
  event.viewTransition.finished.then(clear, clear);
}
window.addEventListener('pageswap', event => {
  const transition = event as PageTransitionEvent;
  prepare(transition, transition.activation?.entry?.url);
});
window.addEventListener('pagereveal', event => {
  prepare(event as PageTransitionEvent, navigation?.activation?.from?.url);
});
