const express = require('express')
const userController = require('../controller/user')
const groupController = require('../controller/group')
const questionsController = require('../controller/questions')

const router = express.Router()
router.post('/user', userController.createUser)
router.post('/group', groupController.createGroup)
router.post('/questions', questionsController.createQuestions)

module.exports = router
