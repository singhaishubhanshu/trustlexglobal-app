// GitHub Pages serves unknown paths through 404.html, which returns an HTTP 404 status.
// Copying index.html into a folder for each route makes those URLs return a normal 200.
import { cpSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const out = 'dist/trustlexglobal-app/browser';
const routes = [
  'about', 'process', 'countries', 'faq', 'contact', 'services', 'terms', 'privacy',
  'services/usa-formation', 'services/uae-formation', 'services/singapore-formation',
  'services/legal-drafting', 'services/startup-advisory', 'services/compliance-support',
  'services/usa-company-formation', 'services/uae-company-formation', 'services/singapore-company-formation',
];

if (!existsSync(join(out, 'index.html'))) {
  console.error('static-routes: ' + out + '/index.html not found');
  process.exit(1);
}
for (const r of routes) {
  mkdirSync(join(out, r), { recursive: true });
  cpSync(join(out, 'index.html'), join(out, r, 'index.html'));
}
console.log('static-routes: wrote ' + routes.length + ' route pages');
