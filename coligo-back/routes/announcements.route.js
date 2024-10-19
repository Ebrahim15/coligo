const express = require('express');
const router = express.Router();

const { addAnnouncement, getAnnouncements, updateAnnouncement, deleteAnnouncement } = require('../controllers/announcement.controller');

// POST Requests
router.post('/', addAnnouncement)

// GET Requests
router.get('/', getAnnouncements)

// PUT Requets
router.put('/:id', updateAnnouncement);

// DELETE Requets
router.delete('/:id', deleteAnnouncement);

module.exports = router;