var express = require('express');
var app = express();

var testController = require('./testController');
app.use('/', testController);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get("/test", (req, res, next) => {
    res.json(["test","test"]);
});

module.exports = app;