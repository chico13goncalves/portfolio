// Alternar Tema Claro/Escuro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
// Seleciona todos os elementos que possuem a classe "animated"
const animatedElements = document.querySelectorAll('.animated');

// Configura o Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adiciona as classes de animação quando o elemento é visível
            entry.target.style.opacity = 1; // Certifica-se de que o elemento ficará visível
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Para de observar o elemento após a animação
        }
    });
}, { threshold: 0.1 }); // Inicia a animação quando 10% do elemento está visível

// Adiciona cada elemento "animated" ao observer
animatedElements.forEach(el => {
    observer.observe(el);
});
