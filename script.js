const toggleButton = document.getElementById('menuToggle');
const nav = document.getElementById('navMenu');

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('show');
});
