let nums = [10, 20, 30, 40, 50];
let min = nums.reduce(function(minimum, element) {
    if(minimum < element) {
        return minimum;
    }
    else {
        return element;
    }
});
let max = nums.reduce(function(maximum, element) {
    if(maximum > element) {
        return maximum;
    }
    else {
        return element;
    }
});
console.log("minimum = " + min);
console.log("maximum = " + max);