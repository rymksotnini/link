var express = require('express');
var app = express.Router();
var sequelize = require('../connection');//DB Connection
var role_;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const models =require('../models/index');

function blobToFile(theBlob, fileName){
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    return theBlob;
}

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//fetch all events
app.get('/',(req,res)=>
    models.Event.findAll()
        .then(events =>

            res.json((events)))
        .catch(err => console.log("error !!! pb with events ")));

// Insert a user

app.post('/add',(req, res) => {

    models.Event.create({
        name : req.body.name,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        place: req.body.place,
        category:  req.body.category,
        description: req.body.description,
        image :  req.body.image,
        sponsoringFile: req.body.sponsoringFile,
        budget: req.body.budget ,
        fundings : req.body.fundings

    }).then(event => {
        console.log("created")
        res.json(event)
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
        res.status(500).json({msg: "error", details: err});
    })
);
app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    models.Event.destroy({
        where: {id: id}
    }).then(
        event =>{

            console.log("destroy "+ event)
            res.json(event)
        }
    ).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
});

// Update an event with Id  (NOT TESTED )
app.put('/update/:id', (req, res) => {
        const id = req.params.id;
        models.Event.update(
            {   name : req.body.name,
                startTime: req.body.startTime,
                endTime: req.body.endTime,
                place: req.body.place,
                category:  req.body.category,
                description: req.body.description,
                image :  req.body.image,
                sponsoringFile: req.body.sponsoringFile,
                budget: req.body.budget,
                fundings : req.body.fundings,

            },
            { where: {id: req.params.id} }
        ).then(() => {

                console.log("update")
                res.json({})

        }).catch(err => {
            console.log(err);
            res.status(500).json({msg: "error", details: err});
        });
});

app.put('/updateSponsor/:id', (req, res) => {
    const id = req.params.id;
    models.Event.update(
        {   name : req.body.name,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            place: req.body.place,
            category:  req.body.category,
            description: req.body.description,
            image :  req.body.image,
            sponsoringFile: req.body.sponsoringFile,
            budget: req.body.budget,
            fundings : req.body.fundings,
            Sponsor : req.body.Sponsor

        },
        { where: {id: req.params.id},
          include : [{model: 'Sponsor'}]
        }
    ).then(() => {
        console.log("helloooooooo");
        res.status(200).send("event updated");
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
});



// Delete an event by ID (tested with = > get to change later with delete)
app.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    models.Event.destroy({
        where: {id: id}
    }).then(() => {
        res.status(200).send('deleted successfully an event with id = ' + id);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
});


// we should export this router !
module.exports=app;
