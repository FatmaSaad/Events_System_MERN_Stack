
const express = require('express')

const speakerCtrl = require('../controllers/speaker-ctrl')
const app = require('../index')
const router = express.Router()

router.post('/speaker', speakerCtrl.createSpeaker)
router.put('/speaker/:id', speakerCtrl.updateSpeaker)
router.delete('/speaker/:id', speakerCtrl.deleteSpeaker)
router.get('/speaker/:id', speakerCtrl.getSpeakerById)
router.get('/speakers', speakerCtrl.getSpeakers)
router.post('/upload', speakerCtrl.uploadImage)

module.exports = router