const max = prompt("enter max limit");
const random = Math.floor(Math.random() * max);
let guess = prompt("guess the number");
while(true) {
    if(guess == "quit") {
        console.log("quit");
        break;
    }
    else if(guess == random) {
        alert("you guessed correct");
        console.log("correct");
        break;
    }
    else {
        if(guess < random) {
            alert("you guessed lower");
        }
        else {
            alert("you guessed higher");
        }
        console.log("wrong");
    }
    guess = prompt("please try again");
}