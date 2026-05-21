function fakeLogin() {
  window.location.href = "hub.html";
}

function guestLogin() {
  window.location.href = "hub.html";
}

function fakeSearch() {
  const searchInput = document.getElementById("search");
  const query = searchInput ? searchInput.value.trim() : "";

  localStorage.setItem("fakeSearch", query || "conteúdo econômico");
  window.location.href = "noticia1.html";
}

function showSearchMessage() {
  const savedSearch = localStorage.getItem("fakeSearch");
  const box = document.getElementById("search-message");

  if (box && savedSearch) {
    box.innerHTML = `Você pesquisou por: <strong>${savedSearch}</strong>. Como este é um protótipo navegável, a busca ainda não utiliza banco de dados e direciona para uma notícia demonstrativa.`;
  }
}