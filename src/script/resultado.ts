import Fuse from "fuse.js";
const res = await fetch('http://localhost:4321/API/receitas');
const receitas = await res.json();

// Defina o tipo da receita (ajuste conforme sua estrutura real)
type Receita = {
  title: string;
  slug: string;
  [key: string]: any; // para aceitar campos extras, se houver
};

// Opções para o Fuse.js
const options: Fuse.IFuseOptions<Receita> = {
  keys: ["title", "slug"],
  threshold: 0.3
};

// Captura o valor da URL
const params = new URLSearchParams(window.location.search);
const searchValue = params.get("q") ?? "";

// Cria o Fuse com os dados
const fuse = new Fuse<Receita>(receitas, options);

// Faz a busca
const resultado = fuse.search(searchValue);

// Captura o container
const container = document.getElementById("result");

resultado.map((res) => {

  const div = document.createElement("div");
  const linkDiv = document.createElement("a");

  linkDiv.href = `/${res.item.slug}`;
  linkDiv.textContent = res.item.title;

  div.className = "w-full h-30 outline-1 rounded my-5 p-5";
  div.appendChild(linkDiv);
  container?.appendChild(div);
});
