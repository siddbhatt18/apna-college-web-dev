let btns = document.querySelectorAll("button");
for(let btn of btns) {
    btn.onmouseenter = printClick;
}
function printClick() {
    console.log("button was hovered");
}