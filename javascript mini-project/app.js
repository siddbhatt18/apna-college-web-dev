let gameSeq = [];
let userSeq = [];
let btns = ["red", "green", "blue", "yellow"];
let allBtn = document.querySelectorAll(".btn");
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function() {
    if(started == false) {
        started = true;
        levelUp();
    }
});
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randomIndex = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    gameFlash(randomBtn);
}
function gameFlash(btn) {
    btn.classList.add("gameFlash");
    setTimeout(function() {
        btn.classList.remove("gameFlash");
    }, 500);
}
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 500);
}
for(let currBtn of allBtn) {
    currBtn.addEventListener("click", btnPress);
}
function btnPress() {
    let currBtn = this;
    userFlash(currBtn);
    let userColor = currBtn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}
function checkAns(idx) {
    if(userSeq[idx] == gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, "1000");
        }
    }
    else {
        h2.innerHTML = `Game Over. Your score is ${level}.<br>Press any key to continue.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() { 
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);
        reset();
    }
}
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}