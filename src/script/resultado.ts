import Fuse from 'fuse.js';

const res = await fetch('http://localhost:4321/API/tableTitle');
const tabelaTitulos = await res.json();

interface Receita {
  titulo: string;
  slug: string;
}

const options: Fuse.IFuseOptions<Receita> = {
  keys: ["titulo", "slug"],
  threshold: 0.3,
}

const params = new URLSearchParams(window.location.search);
const searchValue = params.get("q") ?? "";

const fuse = new Fuse<Receita>(tabelaTitulos, options);
const resultado = fuse.search(searchValue);

const container = document.getElementById("result");

resultado.forEach((res) => {

  const { slug, titulo } = res.item;

  const div = document.createElement("div");
  const linkDiv = document.createElement("a");

  linkDiv.href = `/${slug}`;
  linkDiv.textContent = titulo;

  div.className = "w-90 h-70 outline-1 rounded my-5 p-5";
  div.appendChild(linkDiv);
  container?.appendChild(div);
});
