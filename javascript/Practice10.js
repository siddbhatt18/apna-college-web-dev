let favMovie = "avatar";
let guess = prompt("enter movie name");
while(guess != favMovie) {
    if(guess == "quit") {
        console.log("user quit");
        break;
    }
    console.log("wrong guess");
    guess = prompt("enter again");
}
if(guess == favMovie) {
    console.log("correct guess");
}