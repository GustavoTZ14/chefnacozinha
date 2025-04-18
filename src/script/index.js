const frm = document.querySelector("form");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const query = document.getElementById("inSearch").value.trim();

  if (query) {
    window.location.href = `/search/?q=${encodeURIComponent(query)}`
  }
})

