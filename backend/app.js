var express = require('express');
var app = express();

var testController = require('./testController');
var connection = require('./connection');
app.use('/', testController);

module.exports = app;