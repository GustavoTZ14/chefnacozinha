import type { APIRoute } from "astro";
import { db } from "../../lib/db";

export const GET: APIRoute = async () => {
  const [rows] = await db.query('SELECT titulo_receitas.titulo, titulo_receitas.slug, titulo_receitas.id, titulo_receitas.categoria, ingredientes_receitas.receita_id, ingredientes_receitas.ingrediente FROM titulo_receitas JOIN ingredientes_receitas ON titulo_receitas.id = ingredientes_receitas.receita_id');
  return new Response(JSON.stringify(rows), {
    status: 200,
    headers: { 'Content-Type': 'Application/json' },
  });
};
