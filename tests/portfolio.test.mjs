import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { gzipSync } from 'node:zlib';

const root = resolve('dist');
assert.ok(existsSync(join(root, 'index.html')), 'Run npm run build before npm test.');
const walk = dir => readdirSync(dir, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? walk(join(dir, entry.name)) : [join(dir, entry.name)]);
const pages = walk(root).filter(file => file.endsWith('.html'));
const html = file => readFileSync(file, 'utf8');
const sitemap = html(join(root, 'sitemap-0.xml'));
const routeFor = file => '/' + file.slice(root.length + 1).replace(/index\.html$/, '');

test('all expected portfolio, case study and writing pages are generated', () => {
  for (const route of ['', 'work', 'builds', 'about', 'blog', 'work/malaffi-health-portal', 'work/ai-design-delivery', 'work/altimeter', 'work/bus-tracker', 'blog/bilingual-by-design', 'blog/measure-the-whole-workflow', 'blog/designing-the-glance']) {
    assert.ok(existsSync(join(root, route, 'index.html')), route || 'home');
  }
});

test('every rendered page has one main heading, a skip destination and no TODO copy', () => {
  for (const page of pages) {
    const source = html(page);
    assert.equal((source.match(/<h1(?:\s|>)/g) ?? []).length, 1, page);
    assert.match(source, /id="main-content"/, page);
    assert.doesNotMatch(source, /\bTODO\b/, page);
    assert.match(source, /rel="canonical" href="https:\/\/rawat.dev\//, page);
  }
});

test('internal links, fragment targets and local assets resolve in production output', () => {
  for (const page of pages) {
    const source = html(page);
    for (const match of source.matchAll(/\b(?:href|src|poster)="([^"\s]+)"/g)) {
      const value = match[1].replaceAll('&amp;', '&');
      if (!value.startsWith('/') && !value.startsWith('#')) continue;
      if (value.startsWith('/_vercel/')) continue;
      const url = new URL(value, 'https://rawat.dev' + routeFor(page));
      let target = join(root, decodeURIComponent(url.pathname));
      if (!existsSync(target) && !target.endsWith('.html')) target = join(target, 'index.html');
      else if (existsSync(target) && statSync(target).isDirectory()) target = join(target, 'index.html');
      assert.ok(existsSync(target), `${routeFor(page)} → ${value}`);
      if (url.hash && target.endsWith('.html')) {
        const id = decodeURIComponent(url.hash.slice(1));
        assert.ok(html(target).includes(`id="${id}"`), `${routeFor(page)} → missing fragment ${value}`);
      }
    }
  }
});

test('editorial samples stay out of search discovery and RSS', () => {
  const samples = ['work', 'blog'].flatMap(collection => walk(resolve('src/content', collection)).filter(file => /^editorial: true$/m.test(html(file))));
  for (const sample of samples) {
    const collection = sample.includes('/work/') ? 'work' : 'blog';
    const route = `/${collection}/${sample.split('/').pop().replace(/\.mdx?$/, '')}`;
    const page = join(root, route, 'index.html');
    assert.match(html(page), /name="robots" content="noindex, follow"/, route);
    assert.ok(!sitemap.includes(`https://rawat.dev${route}`), route);
    assert.ok(!html(join(root, 'rss.xml')).includes(`https://rawat.dev${route}`), route);
  }
  assert.match(html(join(root, '404.html')), /name="robots" content="noindex, follow"/, '404 pages should not be indexed.');
  for (const slug of ['adafsa', 'appointment-booking', 'ar-furniture']) assert.ok(!existsSync(join(root, 'work', slug, 'index.html')), slug);
  assert.ok(!existsSync(join(root, 'blog/human-cost-of-bad-ux/index.html')));
});

test('homepage provides evidence and contact paths without client rendering', () => {
  const source = html(join(root, 'index.html'));
  assert.match(source, /href="\/work\/ai-design-delivery"/);
  assert.match(source, /href="\/work\/altimeter"/);
  assert.match(source, /href="mailto:abhishek@rawat.dev"/);
  assert.match(source, /srcset="[^"]+480w[^"]+800w[^"]+1200w/);
  assert.doesNotMatch(source, /<astro-island\b/);
  assert.match(source, /<title>Healthcare Product Design Lead, Abu Dhabi \| Abhishek Rawat<\/title>/);
  assert.match(source, /name="robots" content="index, follow, max-image-preview:large"/);
  assert.match(source, /"@type":"WebSite"/);
});

test('editorial samples omit content structured data until they are approved for indexing', () => {
  const post = html(join(root, 'blog', 'bilingual-by-design', 'index.html'));
  const caseStudy = html(join(root, 'work', 'malaffi-health-portal', 'index.html'));
  assert.match(post, /property="og:type" content="article"/);
  assert.match(post, /name="robots" content="noindex, follow"/);
  assert.doesNotMatch(post, /"@type":"BlogPosting"/);
  assert.doesNotMatch(caseStudy, /"@type":"CreativeWork"/);
});

test('optimized project image variants stay below 150KB each', () => {
  const images = walk(join(root, '_astro')).filter(file => file.endsWith('.webp'));
  assert.ok(images.length >= 3);
  images.forEach(file => assert.ok(statSync(file).size < 150_000, file));
});

test('critical portfolio assets stay within a lightweight transfer budget', () => {
  const styles = walk(join(root, '_astro')).filter(file => file.endsWith('.css'));
  assert.equal(styles.length, 1, 'The portfolio should ship one shared stylesheet.');
  assert.ok(gzipSync(readFileSync(styles[0])).byteLength < 25_000, 'Shared CSS should stay below 25KB gzipped.');
  const home = html(join(root, 'index.html'));
  assert.match(home, /fetchpriority="high"/);
  assert.match(home, /loading="eager"/);
});

test('visual stories have chapter links, media captions and sample disclosures', () => {
  for (const slug of ['malaffi-health-portal', 'ai-design-delivery', 'altimeter', 'bus-tracker']) {
    const source = html(join(root, 'work', slug, 'index.html'));
    assert.match(source, /aria-label="Case study chapters"/);
    assert.ok((source.match(/<figure class="story-media/g) ?? []).length >= 3, slug);
    assert.match(source, /<figcaption>/);
    assert.match(source, /Before this story is published/);
    const ids = [...source.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
    assert.equal(new Set(ids).size, ids.length, `Duplicate IDs in ${slug}`);
  }
});

test('videos have non-autoplay native fallbacks and previews never nest controls in links', () => {
  for (const file of pages) {
    const source = html(file);
    for (const match of source.matchAll(/<video\b([^>]+)>/g)) {
      assert.match(match[1], /\bcontrols\b/);
      assert.match(match[1], /\bmuted\b/);
      assert.match(match[1], /\bplaysinline\b/);
      assert.match(match[1], /preload="none"/);
      assert.match(match[1], /poster="/);
      assert.doesNotMatch(match[1], /\bautoplay\b/);
    }
    assert.doesNotMatch(source, /<a\b[^>]*>(?:(?!<\/a>)[\s\S])*?data-motion-toggle/);
  }
});
