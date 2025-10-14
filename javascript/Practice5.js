let a = 5;
let b = 10;
let c = 15;
if(a > b) {
    if(a > c) {
        console.log("largest = " + a);
    }
    else {
        console.log("largest = " + c);
    }
}
else {
    if(b > c) {
        console.log("largest = " + b);
    }
    else {
        console.log("largest = " + c);
    }
}