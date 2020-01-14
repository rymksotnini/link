var express = require('express');
var app = express();
var sequelize = require('./connection');//DB Connection
var testController = require('./testController');
const path = require('path');

var userController = require('./controllers/UserController');
var Event = require('./models').Event;
var Organization = require('./models').Organization;
var User = require('./models').User;
var Sponsor = require('./models').Sponsor;
var userController = require('./controllers/UserController');
var organizationController = require('./controllers/OrganizationController');
const bodyParser =require ('body-parser');
var loginController = require('./controllers/LoginController');

const multer = require('multer');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    next();
});
var eventController = require('./controllers/EventController');

app.use(bodyParser.json());
const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'uploads')
    },
    filename: (req, file, callBack) => {
        callBack(null, `LINK_${file.originalname}`)
    }
})


const upload = multer({ storage: storage })

let eventModel = require('../backend/models/event');
const Sequelize = require('sequelize')
var sponsorController = require('./controllers/SponsorController');



app.post('/file', upload.single('file'), (req, res, next) => {
    const file = req.file;
    console.log(file.filename);
    if (!file) {
        const error = new Error('No File')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send({name:file.filename});
})
app.post('/multipleFiles', upload.array('files'), (req, res, next) => {
    const files = req.files;
    console.log(files);
    if (!files) {
        const error = new Error('No File')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send({status:  'ok'});
})
//Body Parser
app.use(bodyParser.urlencoded({extended : false}));
app.get('/download/:name',(req , res) =>
{   console.log("path"+req.params.name)
    const file = path.resolve(__dirname, 'uploads/'+req.params.name);
    //No need for special headers
    res.download(file);
})
//connection test
sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
//add a line in event table
//test request GET
app.use('/', testController);

// les api relatives au controller user commencent par /user
app.use('/user', userController)
app.use('/sponsor', sponsorController)
app.use('/event', eventController);
Organization.sync();
Sponsor.sync();
User.sync();
Event.sync();

app.use('/organization', organizationController);
app.use('/login', loginController);
//


//when the uri /test is called from the front
app.get("/test", (req, res, next) => {
    res.json(["test","test"]);
});



module.exports = app;
