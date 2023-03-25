var fading = true;

window.onscroll = function () {
    console.log(window.scrollY);
    if (window.scrollY < 100) {
        fade(document.getElementById("over-nav"));
    } else {
        unfade(document.getElementById("over-nav"));
    }
}

function fade(element) {
    if (fading) { return }
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
    if (!fading) { return }
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