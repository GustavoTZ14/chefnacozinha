import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CvPKI5nd.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C_4Vzjse.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch("http://localhost:4321/API/tableTitle");
  const tabelaTitulo = await res.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "chefnacozinha.com" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex gap-5 flex-wrap w-400 m-auto"> ${tabelaTitulo.map(({ slug, titulo }) => renderTemplate`<div class="w-80 h-80 rounded outline-1 p-2 grow basis-80"><a${addAttribute(slug, "href")}>${titulo}</a></div>`)} </div> ` })}`;
}, "/home/gustavotz/Repositorios/chefnacozinha/src/pages/index.astro", void 0);

const $$file = "/home/gustavotz/Repositorios/chefnacozinha/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
