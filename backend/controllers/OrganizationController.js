var express = require('express');
var router = express.Router();
var Organization = require('../models').Organization;
const { verifyToken } = require("../token_validation");

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//fetch all the organizations
router.get('/All',verifyToken,(req,res)=>
    Organization.findAll()
        .then(organizations => res.json((organizations)))
        .catch(err => console.log("error !!! pb with organizations ")));

//get organization by id
router.get('/:id', (req, res,next) =>{

    Organization.findByPk(req.params.id).then(organization => {
        res.json(organization)
        console.log(organization.toString())
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    })
});

// Delete an organization by ID
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    Organization.destroy({
        where: {id: id}
    }).then(() => {
        res.status(200).send('deleted successfully an organization with id = ' + id);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
});

//insert an organization
router.post('/add',(req, res) => {

    // Save to database
    Organization.create({
        name: req.body.name,
        matricule: req.body.matricule,
        activity: req.body.activity
    }).then(organization => {
        res.status(200).send("user created  successfully ");

    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    })

});

// Update an organization with Id  (NOT TESTED )
router.put('/update/:id', (req, res) => {
    const id = req.params.id;
    Organization.update(
        {  name: req.body.name,
            matricule: req.body.matricule,
            activity: req.body.activity},
        { where: {id: req.params.id} }
    ).then(() => {
        res.status(200).send("updated successfully organization with id = " + id);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
});

module.exports = router;
