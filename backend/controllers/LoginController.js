var express = require('express');
var app = express.Router();
var sequelize = require('../connection');//DB Connection
var role_;
const { sign } = require("jsonwebtoken");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const models =require('../models/index');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/',(req,res)=> {
    console.log("in back")
    models.User.findOne({
        where:{
            email:req.body.email
        }
    })
        .then(user => {
            console.log(user);
            if (!user) {
                return res.status(404).send({reason: 'user not found'})
            }
            const result = req.body.password == user.password;
            if (result) {
                console.log("validCredentials");
                user.password = undefined;
                const jsontoken = sign({result: user}, "qwe1234", {
                    expiresIn: "1h"
                });
                console.log(jsontoken)
                return res.json({
                    success: 1,
                    message: "login successfully",
                    token: jsontoken
                });
            } else {
                return res.json({
                    success: 0,
                    data: "Invalid email or password"
                });
            }
        }) } )

module.exports=app;
