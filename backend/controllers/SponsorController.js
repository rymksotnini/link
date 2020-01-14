const express = require('express');
const app = express.Router();
const sequelize = require('../connection');
const models = require('../models/index');
const User = require('../models').User;
// Body parser to get the data form , it's like a middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

//fetch all the sponsors
app.get('/all', (request, response) =>
    models.Sponsor.findAll({
        include: [User]
    }).then((sponsors) => response.send(sponsors))
);

// Find a Sponsor by Id
app.get('/:id', (req, res) =>
    models.Sponsor.findByPk(req.params.id,
        {
            include: [User]
        }).then(sponsor => {
        res.json(sponsor);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    })
);

// Find a Sponsor by User ID
app.get('/findByUserLogged/:id', (request, response) => {
    models.User.findByPk(request.params.id)
        .then((result) => {
            let sponsor_id = result.dataValues.SponsorId;
            models.Sponsor.findByPk(sponsor_id,
                {
                    include: [User]
                }).then(sponsor => {
                    response.json(sponsor);
            }).catch(err => {
                console.log(err);
                response.status(500).json({msg: "error", details: err});
            })
        })
});
var role_;

// Insert a sponsor
app.post('/add', (request, response) => {
        console.log(request.body)
        if (request.body.user.role == "0") {
            role_ = 'Sponsor';
        } else if (request.body.user.role == "1") {
            role_ = 'Organization';
        }
        models.Sponsor.create({
                name: request.body.name,
                activity: request.body.activity,
                city: request.body.city,
                country: request.body.country,
                slogan: request.body.slogan,
                image: request.body.image,
                User: {
                    UserName: request.body.user.UserName,
                    email: request.body.user.email,
                    password: request.body.user.password,
                    role: role_,
                }
            }, {
                include: [User]
            }
        ).then(user => {
            response.status(200).send("sponsor created  successfully ");
        }).catch(err => {
            console.log(err);
            response.status(500).json({msg: "error", details: err});
        })
    }
);

// Delete a sponsor by ID
app.delete('/delete/:id', (req, res) => {
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

//update Sponsor
app.put('/update', (request, response) => {
    let sponsor = request.body;
    let id = request.body.id;
    models.Sponsor.update(sponsor,
        {where: {id: id}}
    ).then(() => {
        res.status(200).json({msg: "updated successfully a customer with id = " + id});
    });
});

// we should export this router !
module.exports = app;
