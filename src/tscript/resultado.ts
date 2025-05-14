import Fuse from 'fuse.js';

const res = await fetch('http://localhost:4321/API/tableTitle');
const tabelaTitulos = await res.json();

interface Receita {
  title: string;
  slug: string;
}

const options: Fuse.IFuseOptions<Receita> = {
  keys: ["title", "slug"],
  threshold: 0.3,
}
interface Receita {
  title: string;
  slug: string;
}

const params = new URLSearchParams(window.location.search);
const searchValue = params.get("q") ?? "";

const fuse = new Fuse<Receita>(tabelaTitulos, options);
const resultado = fuse.search(searchValue);

const container = document.getElementById("result");

resultado.forEach((res) => {

  const { slug, title } = res.item;

  const div = document.createElement("div");
  const linkDiv = document.createElement("a");

  linkDiv.href = `/${slug}`;
  linkDiv.textContent = title;

  div.className = "w-90 h-70 outline-1 rounded my-5 p-5";
  div.appendChild(linkDiv);
  container?.appendChild(div);
});
