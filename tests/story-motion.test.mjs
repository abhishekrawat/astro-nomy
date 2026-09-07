import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';

const source = stripTypeScriptTypes(readFileSync(new URL('../src/scripts/story-motion.ts', import.meta.url), 'utf8')).replace('export function', 'function');

// Exercise the actual controller in a minimal DOM, without adding a browser runtime.
function harness({ reduced = false, saveData = false, observer = true, rejectPlay = false } = {}) {
  const documentEvents = {};
  const preferenceEvents = {};
  let onIntersection;
  const preference = { matches: reduced, addEventListener: (event, callback) => { preferenceEvents[event] = callback; } };
  const stages = [true, false].map(hasVideo => {
    const attributes = {};
    const parts = { '[data-motion-icon]': {}, '[data-motion-text]': {} };
    const listeners = {};
    const button = { hidden: true, dataset: { label: 'test preview' }, setAttribute: (key, value) => { attributes[key] = value; }, querySelector: key => parts[key], addEventListener: (key, value) => { listeners[key] = value; } };
    const video = hasVideo ? { controls: true, muted: false, paused: true, plays: 0, play() { this.plays++; this.paused = false; return rejectPlay ? Promise.reject(new Error('Autoplay blocked')) : Promise.resolve(); }, pause() { this.paused = true; } } : null;
    const classes = new Set();
    const element = { classList: { toggle: (key, enabled) => enabled ? classes.add(key) : classes.delete(key) }, querySelector: key => key === 'video' ? video : button };
    return { element, button, video, classes, attributes, click: () => listeners.click() };
  });
  class Observer { constructor(callback) { onIntersection = callback; } observe() {} }
  const doc = { hidden: false, querySelectorAll: () => stages.map(stage => stage.element), addEventListener: (event, callback) => { documentEvents[event] = callback; } };
  const context = vm.createContext({ document: doc, navigator: { connection: { saveData } }, matchMedia: () => preference, window: observer ? { IntersectionObserver: Observer } : {}, IntersectionObserver: Observer });
  vm.runInContext(source + '\ninitializeMotion();', context);
  return {
    stages,
    visibility: ratios => onIntersection(stages.map((stage, index) => ({ target: stage.element, intersectionRatio: ratios[index] }))),
    hidden: value => { doc.hidden = value; documentEvents.visibilitychange(); },
    reduce: value => { preference.matches = value; preferenceEvents.change(); },
  };
}

test('preview playback is lazy, muted, and limited to one visible stage', () => {
  const h = harness();
  assert.equal(h.stages[0].video.plays, 0);
  h.visibility([.8, .6]);
  assert.equal(h.stages[0].video.muted, true);
  assert.equal(h.stages[0].video.paused, false);
  assert.equal(h.stages[1].classes.has('is-playing'), false);
  h.visibility([.1, .8]);
  assert.equal(h.stages[0].video.paused, true);
  assert.equal(h.stages[1].classes.has('is-playing'), true);
  h.visibility([0, 0]);
  assert.ok(h.stages.every(stage => !stage.classes.has('is-playing')));
});

test('manual pause persists across scrolling and manual play has priority', () => {
  const h = harness();
  h.visibility([.8, 0]);
  h.stages[0].click();
  assert.equal(h.stages[0].attributes['aria-pressed'], 'false');
  h.visibility([0, 0]); h.visibility([.8, .6]);
  assert.equal(h.stages[0].video.paused, true);
  h.stages[0].click();
  assert.equal(h.stages[0].attributes['aria-label'], 'Pause test preview');
  assert.equal(h.stages[1].classes.has('is-playing'), false);
});

test('background tabs stop playback and restore only a visible preview', () => {
  const h = harness();
  h.visibility([.8, .6]);
  h.hidden(true);
  assert.ok(h.stages.every(stage => !stage.classes.has('is-playing')));
  h.hidden(false);
  assert.equal(h.stages[0].video.paused, false);
});

test('reduced motion and save-data prevent automatic playback', () => {
  for (const options of [{ reduced: true }, { saveData: true }]) {
    const h = harness(options);
    h.visibility([.8, .8]);
    assert.equal(h.stages[0].video.plays, 0);
    assert.equal(h.stages[1].classes.has('is-playing'), false);
    h.stages[0].click();
    assert.equal(h.stages[0].video.paused, false, 'An explicit video play remains available');
  }
  const h = harness();
  h.visibility([.8, .6]); h.reduce(true);
  assert.equal(h.stages[0].video.paused, true);
  assert.equal(h.stages[1].button.hidden, true, 'Decorative motion controls disappear when motion is disabled');
});

test('blocked autoplay leaves a usable play button', async () => {
  const h = harness({ rejectPlay: true });
  h.visibility([.8, 0]);
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(h.stages[0].attributes['aria-pressed'], 'false');
  assert.equal(h.stages[0].button.hidden, false);
  h.stages[0].click();
  assert.equal(h.stages[0].video.plays, 2);
});

test('manual playback remains available without IntersectionObserver', () => {
  const h = harness({ observer: false });
  h.stages[0].click();
  assert.equal(h.stages[0].video.paused, false);
  h.stages[0].click();
  assert.equal(h.stages[0].video.paused, true);
});
