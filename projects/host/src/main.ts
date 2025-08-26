import { loadManifest } from '@angular-architects/module-federation-runtime';

loadManifest('/assets/mf.manifest.json')
  .catch((err) => console.error(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));

