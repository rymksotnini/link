var express = require('express');
var app = express.Router();
var sequelize = require('../connection');//DB Connection

// Body parser to get the data form , it's like a middleware
const bodyParser = require('body-parser');
// attention !! we should import the index and not directly the model user so that we can use the different crud methods findAll is not a function error ;)
const models =require('../models/index');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//fetch all the users
app.get('/',(req,res)=>
    models.User.findAll()
        .then(users => res.send(users))
        .catch(err => console.log("error !!! pb with users ")));

// Insert a user
app.post('/add',(req,res)=>
    res.send(req.body)
);


// we should export this router !
module.exports=app;
