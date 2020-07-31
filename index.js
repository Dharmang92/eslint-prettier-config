// testing for any unwanted errors or linting.

const express = require("express");
require("dotenv").config();

const app = express();

console.log("haha");

app.get("/", function (req, res) {
    res.send(process.env.TEST);
});

app.listen(3877, () => {
    console.log(`listening on http://localhost:3877`);
});
