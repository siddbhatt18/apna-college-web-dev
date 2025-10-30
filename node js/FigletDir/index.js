const figlet = require("figlet");
figlet("Hello World", function(err, data) {
    if(err) {
        console.log("error");
        console.dir(err);
        return;
    }
    console.log(data);
});