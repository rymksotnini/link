var express = require('express');
var router = express.Router();
var Organization = require('../models').Organization;
const User = require('../models').User;
const {verifyToken} = require("../token_validation");
const {sign} = require("jsonwebtoken");
var role_;

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});
//fetch all the organizations
router.get('/All', verifyToken, (req, res) =>
    Organization.findAll({
            include: [User]
        }
    )
        .then((organizations) => {
                console.log(organizations);
                res.json(organizations);
            }
        )
        .catch(err => console.log("error !!! pb with organizations ")));

//get organization by id
router.get('/:id', (req, res, next) => {
    Organization.findByPk(
        req.params.id,
        {
            include: [User]
        }
    ).then(organization => {
        res.json(organization);
        console.log(organization.toString());
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    })
});

// Find a Sponsor by User ID
router.get('/findByUserLogged/:id', (request, response) => {
    User.findByPk(request.params.id)
        .then((result) => {
            let organization_id = result.dataValues.OrganizationId;
            Organization.findByPk(organization_id,
                {
                    include: [User]
                }).then(organization => {
                response.json(organization);
            }).catch(err => {
                console.log(err);
                response.status(500).json({msg: "error", details: err});
            })
        })
});

// Delete an organization by OrganizationId
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    Organization.destroy({
        where: {id: id}
    }).then(
        organizations => {f
            console.log("destroy " + organizations)
            res.json(organizations)
        }
    ).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
});

//Delete an organization by userId
router.delete('/deleteMyself/:id', (req, res) => {
    User.findByPk(req.params.id)
        .then((result) => {
            let organization_id = result.dataValues.OrganizationId;
            Organization.destroy({
                where: {id: organization_id}
            }).then(
                organizations => {
                    console.log("destroy " + organizations)
                    res.json(organizations)
                }
            ).catch(err => {
                console.log(err);
                res.status(500).json({msg: "error", details: err})
            });
            User.destroy({
                where: {id: req.params.id}
            }).then(
                user => {
                    console.log("destroyit user");
                    res.json(user)
                }
            );
        });
});

//insert an organization
router.post('/add', (request, response) => {
    // Save to database
    Organization.create({
        name: request.body.name,
        matricule: request.body.matricule,
        activity: request.body.activity,
        User: {
            UserName: request.body.user.UserName,
            email: request.body.user.email,
            password: request.body.user.password,
            role: "organization",
        },
    }, {
        include: [User]
    }).then((organization) => {

        if (!organization.User) {
            console.log("NoUser");
            return response.status(404).send({reason: 'user not found'})
        }
        organization.User.password = undefined;
        const jsontoken = sign({result: organization.User.name}, "secret", {
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

// Update an organization with Id
router.put('/update/:id', (req, res) => {
    const id = req.params.id;
    let organization = request.body;
    Organization.update(organization,
        {where: {id: id}}
    ).then(() => {
        res.status(200).send("updated successfully organization with id = " + id);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
});

module.exports = router;
