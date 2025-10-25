function saveToDB(data) {
    return new Promise(function(resolve, reject) {
        let netSpeed = Math.floor(Math.random() * 10) + 1;
        if(netSpeed > 4) {
            resolve("success");
        }
        else {
            reject("failure");
        }
    });
}
let request = saveToDB("apna college");
request.then(function(result) {
    console.log("data1 saved");
    console.log(result);
    return saveToDB("hello world");
})
.then(function(result) {
    console.log("data2 saved");
    console.log(result);
    return saveToDB("web development");
})
.then(function(result) {
    console.log("data3 saved");
    console.log(result);
})
.catch(function(error) {
    console.log("data lost");
    console.log(error);
});