import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CagqIyeW.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/api/tablecomplete.astro.mjs');
const _page1 = () => import('./pages/api/tabletitle.astro.mjs');
const _page2 = () => import('./pages/categorias/_---categoria_.astro.mjs');
const _page3 = () => import('./pages/search.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const _page5 = () => import('./pages/_---slug_.astro.mjs');
const pageMap = new Map([
    ["src/pages/API/tableComplete.ts", _page0],
    ["src/pages/API/tableTitle.ts", _page1],
    ["src/pages/categorias/[...categoria].astro", _page2],
    ["src/pages/search.astro", _page3],
    ["src/pages/index.astro", _page4],
    ["src/pages/[...slug].astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "f65f1851-a9e0-41ed-8998-4f76987ad608"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
