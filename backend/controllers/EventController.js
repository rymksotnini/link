var express = require('express');
var app = express.Router();
var sequelize = require('../connection');//DB Connection
var role_;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const models =require('../models/index');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//fetch all events
app.get('/',(req,res)=>
    models.Event.findAll()
        .then(events => res.json((events)))
        .catch(err => console.log("error !!! pb with events ")));

// Insert a user
app.post('/add',(req, res) => {

    models.Event.create({
        name : req.body.name,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        place: req.body.place,
        category:  req.body.category,
        description: req.body.description
    }).then(event => {
        res.status(200).send("event created  successfully ");

    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    })

});

// Find a event by Id
app.get('/:id',(req, res) =>
    models.Event.findByPk(req.params.id).then(event => {
        res.json(event);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    })
);

// Update an event with Id  (NOT TESTED )
app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    models.Event.update(
        {   name : req.body.name,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            place: req.body.place,
            category:  req.body.category,
            description: req.body.description },
        { where: {id: req.params.id} }
    ).then(() => {
        res.status(200).send("updated successfully an event with id = " + id);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
});


// Delete an event by ID (tested with = > get to change later with delete)
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
