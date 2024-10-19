const express = require('express');
const { getQuizes, addQuiz, updateQuiz, deleteQuiz } = require('../controllers/quiz.controller');
const router = express.Router();

// GET Request
router.get('/', getQuizes);

// POST Request
router.post('/', addQuiz);

// PUT Request
router.put('/:id', updateQuiz);

// DELETE Request
router.delete('/:id', deleteQuiz);

module.exports = router;