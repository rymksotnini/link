var express = require('express');
var app = express.Router();
var sequelize = require('../connection');//DB Connection
var role_;


// Body parser to get the data form , it's like a middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
        .then(users => res.json((users)))
        .catch(err => console.log("error !!! pb with users ")));

// Insert a user
app.post('/add',(req, res) => {

    if (req.body.role == "0"){
        role_='Sponsor';
    }


    else if (req.body.role == "1"){
        role_='Organization';
    }


    // Save to database
    models.User.create({
        UserName: req.body.UserName,
        email: req.body.email,
        password: req.body.password,
        role: role_,
    }).then(user => {
        res.status(200).send("user created  successfully ");

    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    })

});

// Find a user by Id
app.get('/:id',(req, res) =>
    models.User.findByPk(req.params.id).then(user => {
        res.json(user);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    })
);

// Update a user with Id  (NOT TESTED )
app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    models.User.update(
        {  UserName: req.body.UserName,
            email: req.body.email,
            password: req.body.password },
        { where: {id: req.params.id} }
    ).then(() => {
        res.status(200).send("updated successfully a user with id = " + id);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
});


// Delete a user by ID (tested with = > get to change later with delete)
app.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    models.User.destroy({
        where: {id: id}
    }).then(() => {
        res.status(200).send('deleted successfully a user with id = ' + id);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
});


// we should export this router !
module.exports=app;
