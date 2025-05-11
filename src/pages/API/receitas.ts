import type { APIRoute } from "astro";
import { db } from "../../lib/db";

export const GET: APIRoute = async () => {
  const [rows] = await db.query('SELECT * FROM receitas');
  return new Response(JSON.stringify(rows), {
    status: 200,
    headers: { 'Content-Type': 'Application/json' },
  });
};
