const botao = document.getElementById("toggle-tema");
const titulo = document.getElementById("titulo");
const body = document.body;

botao.addEventListener("click", () => {
  // Verifica se o modo escuro está ativo
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    titulo.textContent = "Modo claro 🌙";
    botao.textContent = "Ativar modo escuro";
  } else {
    body.classList.add("dark-mode");
    titulo.textContent = "Modo escuro ☀️";
    botao.textContent = "Ativar modo claro";
  }
});
