import Fuse from "fuse.js";
import receitas from "../Dados/receitas.json";

const Options = {
  keys: ["titulo", "ingredientes"],
  threshold: 0.3
}

const params = new URLSearchParams(window.location.search);
const searchValue = params.get("q");

const fuse = new Fuse(receitas, Options);
const resultado = fuse.search(searchValue);

const container = document.getElementById("result");

for (const res of resultado) {
  const { titulo, linkReceita } = res.item;

  const div = document.createElement("div");
  const linkDiv = document.createElement("a");
  linkDiv.href = linkReceita;
  linkDiv.textContent = titulo;

  div.className = "w-full h-30 outline-1 rounded my-5 p-5";

  container.appendChild(div);
  div.appendChild(linkDiv);
}
