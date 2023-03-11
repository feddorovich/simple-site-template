var menu = document.querySelector('.menu');
var menuButton = document.querySelector('.menu-button');
var closeButton = document.querySelector('.close-button');

menuButton.addEventListener('click', function() {
    menu.classList.toggle('show');
});

document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.classList.remove('show');
    }
});

closeButton.addEventListener('click', function() {
    menu.classList.remove('show');
});