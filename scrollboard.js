var initScrollpos = window.pageYOffset + 5;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (initScrollpos > currentScrollPos) {
        document.getElementById("visible").style.opacity = "1";
    } else {
        document.getElementById("visible").style.opacity = "0";
    }
    // prevScrollpos = currentScrollPos;
}