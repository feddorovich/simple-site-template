var menu = document.querySelector('.menu');
var menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', function() {
    menu.classList.toggle('show');
});

document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.classList.remove('show');
    }
});