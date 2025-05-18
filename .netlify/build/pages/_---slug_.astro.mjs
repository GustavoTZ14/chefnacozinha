import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CvPKI5nd.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C_4Vzjse.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const getStaticPaths = async () => {
  const res = await fetch("http://localhost:4321/API/tableTitle");
  const tabelaTitulos = await res.json();
  return tabelaTitulos.map(({ slug, titulo, id }) => ({
    params: { slug },
    props: { titulo, id }
  }));
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const resp = await fetch("http://localhost:4321/API/tableComplete");
  const tabelaCompleta = await resp.json();
  const { titulo, id } = Astro2.props;
  const filtID = tabelaCompleta.filter(({ receita_id }) => receita_id === id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": titulo }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="font-bold mb-5">${titulo}</h1> <h4 class="font-bold mb-2">Ingredientes:</h4> <ul> ${filtID.map(({ ingrediente }) => renderTemplate`<li>${ingrediente}</li>`)} </ul> ` })}`;
}, "/home/gustavotz/Repositorios/chefnacozinha/src/pages/[...slug].astro", void 0);

const $$file = "/home/gustavotz/Repositorios/chefnacozinha/src/pages/[...slug].astro";
const $$url = "/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
