let btns = document.querySelectorAll("button");
for(let btn of btns) {
    btn.onclick = printClick;
}
function printClick() {
    console.log("button was clicked");
}