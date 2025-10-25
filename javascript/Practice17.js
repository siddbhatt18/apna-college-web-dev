function getLargerNum(arr, num) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > num) {
            result.push(arr[i]);
        }
    }
    return result;
}
let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;
console.log(getLargerNum(arr, num));