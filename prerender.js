// Build-time prerender: render the React app to static HTML and inject it into
// dist/index.html, so crawlers (and non-JS clients) get real content instead of
// an empty <div id="root">. The client then hydrates this markup (see main.jsx).
//
// Run after both `vite build` (client) and `vite build --ssr src/entry-server.jsx`.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';

const PLACEHOLDER = '<div id="root"></div>';

const { render } = await import('./dist-server/entry-server.js');
const appHtml = render();

const template = readFileSync('dist/index.html', 'utf-8');
if (!template.includes(PLACEHOLDER)) {
  throw new Error(`prerender: could not find ${PLACEHOLDER} in dist/index.html`);
}

const html = template.replace(PLACEHOLDER, `<div id="root">${appHtml}</div>`);
writeFileSync('dist/index.html', html);

// The SSR bundle is a build artefact only — keep it out of the deployed output.
rmSync('dist-server', { recursive: true, force: true });

console.log(`prerender: injected ${appHtml.length} bytes of HTML into dist/index.html`);
