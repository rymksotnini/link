const express = require('express');
const app = express.Router();
const sequelize = require('../connection');
const models = require('../models/index');
const User = require('../models').User;
const {sign} = require("jsonwebtoken");
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

let role_;
// Insert a sponsor and correspondant user
app.post('/add', (request, response) => {
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
                    role: "Sponsor",
                }
            }, {
                include: [User]
            }
        ).then((sponsor) => {

            if (!sponsor.User) {
                console.log("NoUser");
                return response.status(404).send({reason: 'user not found'})
            }
            sponsor.User.password = undefined;
            const jsontoken = sign({result: sponsor.User.name}, "secret", {
                expiresIn: "1h"
            });
            console.log(jsontoken)
            return response.json({
                success: 1,
                message: "login successfully",
                token: jsontoken
            });
            response.status(200).send("user created  successfully ");

        }).catch(err => {
            console.log(err);
            response.status(500).json({msg: "error", details: err});
        });
    })

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
