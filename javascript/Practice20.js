function countVowel(str) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        let currChar = str.charAt(i);
        if(currChar == "a" || currChar == "e" || currChar == "i" || currChar == "o" || currChar == "u") {
            count++;
        }
    }
    return count;
}
let str = "apnacollege";
console.log(countVowel(str));