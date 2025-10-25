let head = document.querySelector("h1");
head.style.color = "purple";
let link = document.querySelectorAll(".box a");
for(let i = 0; i < link.length; i++) {
    link[i].style.color = "green";
}