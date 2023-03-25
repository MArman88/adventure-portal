var fading = true;
var allowFading = true;

window.onscroll = function () {
    console.log(window.scrollY);
    if (window.scrollY < 100) {
        allowFading = true;
        fade(document.getElementById("over-nav"));
    } else {
        allowFading = false;
        unfade(document.getElementById("over-nav"));
    }
}

function fade(element) {
    if (fading && allowFading) { return }
    fading = true
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 20);
}

function unfade(element) {
    if (!fading && !allowFading) { return }
    fading = false
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 20);
}