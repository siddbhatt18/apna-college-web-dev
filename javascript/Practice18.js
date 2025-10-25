function getUnique(str) {
    let ans = "";
    for(let i = 0; i < str.length; i++) {
        let currChar = str[i];
        if(ans.includes(currChar) == false) {
            ans = ans + currChar;
        }
    }
    return ans;
}
let str = "abcdabcdefgggh";
console.log(getUnique(str));