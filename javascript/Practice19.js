function longestName(country) {
    let ansIdx = 0;
    for(let i = 0; i < country.length; i++) {
        let currLen = country[i].length;
        let ansLen = country[ansIdx].length;
        if(currLen > ansLen) {
            ansIdx = i;
        }
    }
    return country[ansIdx];
}
let country = ["australia", "germany", "united states", "india", "russia"];
console.log(longestName(country));