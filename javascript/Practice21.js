let id = setInterval(() => {
    console.log("hello world");
}, 2000);
setTimeout(() => {
    clearInterval(id);
    console.log("program end");
}, 12000);