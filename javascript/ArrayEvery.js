let nums1 = [2, 4, 6, 8];
let nums2 = [1, 2, 3, 4];
let result1 = nums1.every(function(element) {
    return element % 2 == 0;
});
let result2 = nums2.every(function(element) {
    return element % 2 == 0;
});
console.log(result1);
console.log(result2);