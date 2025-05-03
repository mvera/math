// menu-loader.js
window.addEventListener('DOMContentLoaded', () => {
    fetch('../menu.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('menu-container').innerHTML = html;
        });
});
