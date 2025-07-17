const toggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    toggle.classList.toggle('open'); // 👈 ajoute/retire la classe open au bouton
});