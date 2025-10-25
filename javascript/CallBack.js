h1 = document.querySelector("h1");
function changeColor(color, delay, nextColor) {
    setTimeout(function() {
        h1.style.color = color;
        if(nextColor != null) {
            nextColor();
        }
    }, delay);
}
changeColor("red", 1000, function() {
    changeColor("blue", 1000, function() {
        changeColor("green", 1000);
    });
});