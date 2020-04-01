
const express = require('express')

const eventCtrl = require('../controllers/event-ctrl')

const router = express.Router()

router.post('/event', eventCtrl.createEvent)
router.put('/event/:id', eventCtrl.updateEvent)
router.delete('/event/:id', eventCtrl.deleteEvent)
router.get('/event/:id', eventCtrl.getEventById)
router.get('/events', eventCtrl.getEvents)

module.exports = router