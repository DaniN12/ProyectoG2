const toggleButton = document.getElementById('menuToggle');
const nav = document.getElementById('navMenu');

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('show');
});

document.addEventListener('click', (event) => {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnToggle = toggleButton.contains(event.target);

    if (!isClickInsideNav && !isClickOnToggle) {
        nav.classList.remove('show');
    }
});

