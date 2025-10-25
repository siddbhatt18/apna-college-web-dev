let num = 287152;
let count = 0;
let sum = 0;
let copy = num;
while(copy > 0) {
    count++;
    let digit = copy % 10;
    sum = sum + digit;
    copy = Math.floor(copy / 10);
}
console.log(count);
console.log(sum);