const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.get("/", function(req, res) {
    res.render("home.ejs");
});
app.get("/ig/:username", function(req, res) {
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data) {
        res.render("instagram.ejs", {data});
    }
    else {
        res.render("error.ejs");
    }
});
app.get("/rolldice", function(req, res) {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", {diceVal});
});
app.listen(port, function() {
    console.log(`app is listening on port ${port}`);
});