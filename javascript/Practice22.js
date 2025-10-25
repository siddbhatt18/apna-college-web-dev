let nums = [1, 2, 3, 4, 5];
const square = nums.map(function(val) {
    return val * val;
});
let sum = 0;
for(let i = 0; i < square.length; i++) {
    sum = sum + square[i];
}
let avg = sum / nums.length;
console.log(avg);