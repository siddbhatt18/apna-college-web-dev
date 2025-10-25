async function greet() {
    return "hello world";
}
greet().then(function(result) {
    console.log("success");
    console.log(result);
})
.catch(function(error) {
    console.log("failure");
    console.log(error);
});