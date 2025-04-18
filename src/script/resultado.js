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
  const { ingredientes } = res.item;

  const div = document.createElement("div");
  div.textContent = ingredientes;

  container.appendChild(div)
}
