var express = require('express');
var app = express();
var sequelize = require('./connection');//DB Connection
var testController = require('./testController');
var Event = require('./models').Event;
var userController = require('./controllers/UserController');
var organizationController = require('./controllers/OrganizationController');
const bodyParser =require ('body-parser');


//Body Parser
app.use(bodyParser.urlencoded({extended : false}));

//connection test
sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
//add a line in event table
Event.sync({ force: true }).then(() => {
    // Now the `users` table in the database corresponds to the model definition
    return Event.create({
        Name: 'TOGETHER',
        Date: 1-12-2020
    });
});

//test request GET
app.use('/', testController);

// les api relatives au controller user commencent par /user
app.use('/user', userController);

app.use('/organization', organizationController);
//
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//when the uri /test is called from the front
app.get("/test", (req, res, next) => {
    res.json(["test","test"]);
});

app.get("/events", (req,res,next)=>{
    Event.findAll().then(events => {
        res.json(JSON.stringify(events))
    })
    }
);


module.exports = app;
