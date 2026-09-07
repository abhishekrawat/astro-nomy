/** A single visible preview plays at a time; reading never depends on motion. */
export function initializeMotion() {
  const stages = [...document.querySelectorAll<HTMLElement>('[data-motion-stage]')];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  const entries = stages.map(element => ({
    element, button: element.querySelector<HTMLButtonElement>('[data-motion-toggle]')!,
    video: element.querySelector<HTMLVideoElement>('video'), ratio: 0,
    stopped: false, playing: false, version: 0,
  }));
  let selected: typeof entries[number] | undefined;
  function setPlaying(entry: typeof entries[number], playing: boolean) {
    if (entry.playing === playing) return;
    entry.playing = playing;
    const version = ++entry.version;
    entry.element.classList.toggle('is-playing', playing);
    entry.button.setAttribute('aria-pressed', String(playing));
    entry.button.setAttribute('aria-label', `${playing ? 'Pause' : 'Play'} ${entry.button.dataset.label}`);
    entry.button.querySelector('[data-motion-icon]')!.textContent = playing ? 'Ⅱ' : '▶';
    entry.button.querySelector('[data-motion-text]')!.textContent = playing ? 'Pause preview' : 'Play preview';
    if (entry.video) {
      if (playing) {
        entry.video.play().catch(() => {
          if (version !== entry.version) return;
          entry.stopped = true;
          setPlaying(entry, false);
        });
      } else entry.video.pause();
    }
  }
  function update() {
    entries.forEach(entry => { entry.button.hidden = reduce.matches && !entry.video; });
    if (document.hidden) {
      entries.forEach(entry => setPlaying(entry, false));
      return;
    }
    if (selected && (selected.ratio < .15 || selected.stopped)) selected = undefined;
    const automatic = !reduce.matches && !connection?.saveData;
    const candidate = selected ?? (automatic ? entries.filter(entry => entry.ratio >= .45 && !entry.stopped).sort((a, b) => b.ratio - a.ratio)[0] : undefined);
    entries.forEach(entry => setPlaying(entry, entry === candidate));
  }
  entries.forEach(entry => {
    entry.button.hidden = false;
    if (entry.video) { entry.video.controls = false; entry.video.muted = true; }
    entry.button.addEventListener('click', () => {
      entry.stopped = entry.playing;
      selected = entry.stopped ? undefined : entry;
      // A click is enough visibility evidence even without IntersectionObserver.
      if (selected) selected.ratio = Math.max(.45, selected.ratio);
      update();
    });
  });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(changes => {
      changes.forEach(change => {
        const entry = entries.find(item => item.element === change.target)!;
        entry.ratio = change.intersectionRatio;
      });
      update();
    }, { threshold: [0, .15, .45, .65, 1] });
    entries.forEach(entry => observer.observe(entry.element));
  }
  reduce.addEventListener('change', () => { selected = undefined; update(); });
  document.addEventListener('visibilitychange', update);
  update();
}
