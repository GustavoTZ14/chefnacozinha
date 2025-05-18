import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as renderScript } from '../chunks/astro/server_CvPKI5nd.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C_4Vzjse.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Search = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "search" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="result" class="block"></div> ${renderScript($$result2, "/home/gustavotz/Repositorios/chefnacozinha/src/pages/search.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/home/gustavotz/Repositorios/chefnacozinha/src/pages/search.astro", void 0);

const $$file = "/home/gustavotz/Repositorios/chefnacozinha/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
