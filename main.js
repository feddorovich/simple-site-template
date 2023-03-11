var menu = document.querySelector('.menu');
var menuButton = document.querySelector('.menu-button');
var closeButton = document.querySelector('.close-button');

menuButton.addEventListener('click', function () {
    menu.classList.toggle('show');
});

document.addEventListener('click', function (event) {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.classList.remove('show');
    }
});

closeButton.addEventListener('click', function () {
    menu.classList.remove('show');
});

// Код свайпа слева
var initialPoint;
var finalPoint;
var swipeThreshold = 100; // пороговое значение дистанции свайпа
var swipeAreaWidth = window.innerWidth * 0.2; // ширина области свайпа (20% экрана)

document.addEventListener('touchstart', function (event) {
    // проверяем, находится ли начальная точка касания в левой области экрана
    if (event.touches[0].clientX < swipeAreaWidth) {
        initialPoint = event.changedTouches[0];
    }
}, false);

document.addEventListener('touchend', function (event) {
    if (!initialPoint) return; // выходим, если начальная точка касания не была установлена
    finalPoint = event.changedTouches[0];
    var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);

    if (xAbs > yAbs && xAbs > swipeThreshold) {
        if (finalPoint.pageX < initialPoint.pageX) {
            menu.classList.remove('show');
        } else {
            menu.classList.add('show');
        }
    }

    initialPoint = null; // очищаем начальную точку касания
}, false);