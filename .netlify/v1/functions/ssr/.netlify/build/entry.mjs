import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_2NPMuwEe.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/login.astro.mjs');
const _page2 = () => import('./pages/orders/create.astro.mjs');
const _page3 = () => import('./pages/orders/list.astro.mjs');
const _page4 = () => import('./pages/orders/notifications.astro.mjs');
const _page5 = () => import('./pages/orders/tracking.astro.mjs');
const _page6 = () => import('./pages/orders/_id_.astro.mjs');
const _page7 = () => import('./pages/register.astro.mjs');
const _page8 = () => import('./pages/users.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/login.astro", _page1],
    ["src/pages/orders/create.astro", _page2],
    ["src/pages/orders/list.astro", _page3],
    ["src/pages/orders/notifications.astro", _page4],
    ["src/pages/orders/tracking.astro", _page5],
    ["src/pages/orders/[id].astro", _page6],
    ["src/pages/register.astro", _page7],
    ["src/pages/users.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "7ac513bd-19f3-4c8a-af92-6049aba6f93f"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
