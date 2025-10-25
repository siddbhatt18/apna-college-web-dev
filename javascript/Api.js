let url = "https://catfact.ninja/fact";
let response = fetch(url);
response.then(function(result) {
    return result.json();
})
.then(function(data1) {
    console.log("data1 = " + data1.fact);
    return fetch(url);
})
.then(function(result) {
    return result.json();
})
.then(function(data2) {
    console.log("data2 = " + data2.fact);   
})
.catch(function(error) {
    console.log(error);
});