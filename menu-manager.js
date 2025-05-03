// Gérer l'ouverture et la fermeture du menu
const menuToggle = document.getElementById('menu-toggle');
const menuContainer = document.getElementById('menu-container');

// Lorsque le bouton burger est cliqué, ouvrir le menu
menuToggle.addEventListener('click', function () {
    menuContainer.classList.toggle('open');
});

// Optionnel : fermer le menu si un lien est cliqué
const menuLinks = menuContainer.querySelectorAll('a');
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        menuContainer.classList.remove('open');
    });
});
