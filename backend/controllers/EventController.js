const models = require('../database/models');
const { Router } = require('express');

const creatEvent = async (req, res) => {
    try {
        const event = await models.Event.create(req.body);
        return res.status(201).json({
            event,
        });
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}
const getAllEvents = async (req, res) => {
    try {
        const events = await models.Event.findAll();
        return res.status(200).json({ events });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

router.post('/event',creatEvent);
router.get('/events',getAllEvents);

module.exports = {
    creatEvent,
    getAllEvents
}