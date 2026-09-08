import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';

const source = stripTypeScriptTypes(readFileSync(new URL('../src/scripts/page-transitions.ts', import.meta.url), 'utf8'));
function harness({ path = '/', reduced = false } = {}) {
  const listeners = {};
  const previews = [100, 600, 1200].map(top => ({
    dataset: { projectPreview: 'malaffi-health-portal' },
    getBoundingClientRect: () => ({ top, bottom: top + 300, width: 400 }),
    style: { removeProperty() { delete this.viewTransitionName; } },
  }));
  vm.runInNewContext(source, {
    URL, location: { pathname: path, href: `https://rawat.dev${path}` }, innerHeight: 900,
    matchMedia: () => ({ matches: reduced }),
    document: { querySelectorAll: () => previews },
    window: { addEventListener: (event, callback) => { listeners[event] = callback; } },
  });
  return { previews, swap: (url, finished = Promise.resolve()) => listeners.pageswap({
    activation: { entry: { url } }, viewTransition: { finished },
  }) };
}
test('only one visible matching preview participates, and its name is cleaned up', async () => {
  const h = harness();
  h.swap('https://rawat.dev/work/malaffi-health-portal');
  assert.equal(h.previews.filter(p => p.style.viewTransitionName).length, 1);
  assert.equal(h.previews[0].style.viewTransitionName, 'project-preview');
  await Promise.resolve();
  assert.ok(h.previews.every(p => !p.style.viewTransitionName));
});
test('reduced motion, unrelated projects and next-story navigation do not morph previews', () => {
  for (const [options, destination] of [
    [{ reduced: true }, '/work/malaffi-health-portal'],
    [{}, '/work/altimeter'],
    [{ path: '/work/malaffi-health-portal' }, '/work/altimeter'],
  ]) {
    const h = harness(options);
    h.swap(`https://rawat.dev${destination}`);
    assert.ok(h.previews.every(p => !p.style.viewTransitionName));
  }
});
test('skipped transitions also clear names before a history return', async () => {
  const h = harness();
  h.swap('https://rawat.dev/work/malaffi-health-portal', Promise.reject(new Error('Skipped')));
  await Promise.resolve();
  assert.ok(h.previews.every(p => !p.style.viewTransitionName));
});
