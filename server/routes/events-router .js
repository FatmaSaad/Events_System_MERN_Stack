
const express = require('express')

const eventCtrl = require('../controllers/event-ctrl')
const speakerCtrl = require('../controllers/speaker-ctrl')

const router = express.Router()

router.post('/event', eventCtrl.createEvent)
router.put('/event/:id', eventCtrl.updateEvent)
router.delete('/event/:id', eventCtrl.deleteEvent)
router.get('/event/:id', eventCtrl.getEventById)
router.get('/events', eventCtrl.getEvents)
router.post('/event/upload', eventCtrl.uploadImage)
router.get('/speakers', speakerCtrl.getSpeakers)
router.post('/event/upload', speakerCtrl.uploadImage)

module.exports = router