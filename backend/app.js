var express = require('express');
var app = express();

var testController = require('./testController');
//var connection = require('./connection');

//DB Connection :

var sequelize = require('./src/connection');
sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

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
