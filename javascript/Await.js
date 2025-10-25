h1 = document.querySelector("h1");
function changeColor(color, delay) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let num = Math.floor(Math.random() * 5) + 1;
            if(num > 3) {
                reject("promise rejected");
            }
            h1.style.color = color;
            console.log(color);
            resolve("promise resolved");
        }, delay);
    });
}
async function demo() {
    try {
        await changeColor("red", 1000);
        await changeColor("orange", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);
    }
    catch(error) {
        console.log("error occurred");
        console.log(error);
    }
    console.log("program completed");
}
demo();