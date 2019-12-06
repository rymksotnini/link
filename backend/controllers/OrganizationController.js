var express = require('express');
var router = express.Router();
var Organization = require('../models').Organization;

router.get('/:id', (req, res,next) =>{

    Organization.findByPk(req.params.id).then(organization => {
        res.json(JSON.stringify(organization))
        console.log(organization.toString())
    })
});
module.exports = router;