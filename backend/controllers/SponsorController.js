const express = require('express');
const app = express.Router();
const sequelize = require('../connection');
const models = require('../models/index');

// Body parser to get the data form , it's like a middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//fetch all the sponsors
app.get('/all', (request, response) =>
    models.Sponsor.findAll()
        .then(sponsors => response.send(sponsors))
        .catch(err => console.log("ERROR !")));

// Find a sponsor by Id
app.get('/:id', (req, res) =>
    models.Sponsor.findByPk(req.params.id).then(sponsor => {
        res.json(sponsor);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    })
);

// Insert a sponsor
app.post('/add', (request, response) => {
        console.log(request.body)
        models.Sponsor.create({
            name: request.body.name,
            activity: request.body.activity,
            city: request.body.city,
            country: request.body.country,
            slogan: request.body.slogan,
            image: request.body.image
        })
            .then(user => {
                response.status(200).send("sponsor created  successfully ");
            }).catch(err => {
            console.log(err);
            response.status(500).json({msg: "error", details: err});
        })
    }
);

// Delete a sponsor by ID
app.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    models.Sponsor.destroy({
        where: {id: id}
    }).then(() => {
        res.status(200).send('deleted successfully the sponsor with id = ' + id);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
});

// we should export this router !
module.exports = app;
