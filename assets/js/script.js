const botaoTema = document.getElementById('toggle-tema');
const body = document.body;

botaoTema.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    botaoTema.textContent = '☀️ Modo Claro';
  } else {
    botaoTema.textContent = '🌙 Modo Escuro';
  }
});
