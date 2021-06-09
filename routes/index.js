const express = require('express')
const userController = require('../controller/user')
const groupController = require('../controller/group')
const joinController = require('../controller/join-group')
const getQuestionsController = require('../controller/get-questions')


const router = express.Router()
router.post('/user', userController.createUser)
router.post('/group', groupController.createGroup)
router.post('/join', joinController.joinGroup)
router.post('questions', getQuestionsController.getQuestions)


module.exports = router
