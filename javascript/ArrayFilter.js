let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNum = nums.filter(function(element) {
    return element % 2 == 0;
});
let oddNum = nums.filter(function(element) {
    return element % 2 != 0;
});
console.log(evenNum);
console.log(oddNum);