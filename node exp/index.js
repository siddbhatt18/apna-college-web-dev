const express = require("express");
const app = express();
let port = 3000;
app.listen(port, function() {
    console.log(`app is listening on port ${port}`);
});
app.get("/", function(req, res) {
    res.send("root path");
});
app.get("/search", function(req, res) {
    res.send("search path");
});
app.get("/:username/:id", function(req, res) {
    let {username, id} = req.params;
    console.log(req.params);
    res.send(`username is ${username} and id is ${id}`);
});
app.post("/", function(req, res) {
    res.send("root request");
});