import { d as db } from '../../chunks/db_Bo84dZUk.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async () => {
  const [rows] = await db.query("SELECT * FROM titulo_receitas");
  return new Response(JSON.stringify(rows), {
    status: 200,
    headers: { "Content-Type": "Application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
