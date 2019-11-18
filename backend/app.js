var express = require('express');
var app = express();

var testController = require('./testController');
app.use('/', testController);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'link'
});

connection.connect((err)=>{
    if (err)throw err;
    console.log('Connected!');
});
module.exports = app;