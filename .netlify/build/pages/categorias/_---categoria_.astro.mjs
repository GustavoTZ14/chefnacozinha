import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CvPKI5nd.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_C_4Vzjse.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const res = await fetch("http://localhost:4321/API/tableComplete");
  const tabelaCompleta = await res.json();
  return tabelaCompleta.map(({ categoria }) => {
    return {
      params: { categoria }
    };
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const resp = await fetch("http://localhost:4321/API/tableTitle");
  const tabelaTitulo = await resp.json();
  const { categoria } = Astro2.params;
  const filtReceitas = tabelaTitulo.filter((item) => item.categoria === categoria);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": categoria }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex gap-5"> ${filtReceitas.map(({ slug, titulo }) => renderTemplate`<div class="w-80 h-80 rounded outline-1 p-2 grow basis-80"><a${addAttribute(`/${slug}`, "href")}>${titulo}</a></div>`)} </div> ` })}`;
}, "/home/gustavotz/Repositorios/chefnacozinha/src/pages/categorias/[...categoria].astro", void 0);

const $$file = "/home/gustavotz/Repositorios/chefnacozinha/src/pages/categorias/[...categoria].astro";
const $$url = "/categorias/[...categoria]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
