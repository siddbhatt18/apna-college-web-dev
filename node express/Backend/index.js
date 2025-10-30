const express = require("express");
const app = express();
const port = 3000;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.get("/register", function(req, res) {
    let {user, pass} = req.query;
    res.send(`GET Response: username = ${user} and password = ${pass}`);
});
app.post("/register", function(req, res) {
    let {user, pass} = req.body;
    res.send(`POST Response: username = ${user} and password = ${pass}`);
});
app.listen(port, function() {
    console.log(`app is listening to port ${port}`);
});