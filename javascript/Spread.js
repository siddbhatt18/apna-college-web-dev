let arr = [1, 2, 3, 4, 5];
let min = Math.min(...arr);
let max = Math.max(...arr);
console.log("min = " + min);
console.log("max = " + max);
let chars = [..."hello"];
console.log(chars);
const data = {
    email: "hello@mail.com",
    password: "abcde"
};
const dataCopy = {...data, id: 123};
console.log(dataCopy);