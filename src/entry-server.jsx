import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

// Rendered at build time by prerender.js and injected into dist/index.html
// so crawlers receive real HTML content instead of an empty <div id="root">.
export function render() {
  return renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
