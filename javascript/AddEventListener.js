let btns = document.querySelectorAll("button");
for(let btn of btns) {
    btn.addEventListener("click", singleClick);
    btn.addEventListener("dblclick", doubleClick);
}
function singleClick() {
    console.log("single click");
}
function doubleClick() {
    console.log("double click");
}
let p = document.querySelector("p");
p.addEventListener("mouseenter", function() {
    console.log("paragraph was hovered");
});