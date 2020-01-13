const express = require('express');
const app = express.Router();
const sequelize = require('../connection');

const bodyParser = require('body-parser');
const models = require('../models/index');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//fetch all the sponsors
app.get('/all', (request ,response)=>
    models.Sponsor.findAll()
        .then(sponsors => response.send(sponsors))
        .catch(err => console.log("ERROR !")));

// Insert a sponsor
app.post('/add',(request,response)=>
    models.Sponsor.create(request.body)
        .then(function (insertedSponsor) {
            console.log(request.body)
            console.log(insertedSponsor.dataValues);
        })
);

// we should export this router !
module.exports=app;
