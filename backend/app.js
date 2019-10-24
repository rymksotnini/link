var express = require('express');
var app = express();

var testController = require('./testController');
app.use('/', testController);

module.exports = app;