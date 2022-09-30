const express = require('express')
const queRouter = express.Router()
const { createQuizs, getQuize } = require('../controllers/queController')
// const passport = require('../passports/auth')
queRouter.post('/quizs', createQuizs)
queRouter.get('/quizs', getQuize)

module.exports = queRouter
