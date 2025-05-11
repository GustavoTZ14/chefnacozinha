const input = document.getElementById("imageInput");
const preview = document.getElementById("campoImage");

input.addEventListener("change", () => {
  const file = input.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      preview.innerHTML = `<img src="${e.target.result}" class="w-full h-100 mb-2 object-cover" alt="Previa da imagem">`
    };

    reader.readAsDataURL(file);
  }
  else {
    preview.innerHTML = `<span class="text-gray-400">Nenhuma imagem selecionada</span>`;
  }
})
