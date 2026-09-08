/** Event-driven depth, with no idle animation loop or touch interception. */
export function initializeHero() {
  const stage = document.querySelector<HTMLElement>('[data-hero-stage]');
  const surface = stage?.querySelector<HTMLElement>('[data-hero-surface]');
  if (!stage || !surface) return;
  const enabled = matchMedia('(hover: hover) and (pointer: fine) and (min-width: 761px) and (prefers-reduced-motion: no-preference)');
  let frame = 0;
  function reset() {
    cancelAnimationFrame(frame);
    frame = 0;
    surface!.style.removeProperty('--hero-rx');
    surface!.style.removeProperty('--hero-ry');
  }
  stage.addEventListener('pointermove', event => {
    if (!enabled.matches || event.pointerType === 'touch') return;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const bounds = stage.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width)) - .5;
      const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height)) - .5;
      surface.style.setProperty('--hero-rx', `${-y * 4}deg`);
      surface.style.setProperty('--hero-ry', `${x * 6}deg`);
      frame = 0;
    });
  }, { passive: true });
  stage.addEventListener('pointerleave', reset);
  stage.addEventListener('pointercancel', reset);
  enabled.addEventListener('change', reset);
  window.addEventListener('pagehide', reset);
}
