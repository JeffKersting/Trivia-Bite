const express = require('express')
const userController = require('../controller/user')
const groupController = require('../controller/group')
const getQuestionsController = require('../controller/get-questions')


const router = express.Router()
router.post('/user', userController.createUser)
router.get('/user', userController.getUserData)
router.patch('/user', userController.updateUserScore)
router.post('/group', groupController.createGroup)
router.get('/group', groupController.getGroupData)
router.patch('/group', groupController.joinGroup)
router.get('/questions', getQuestionsController.getQuestions)


module.exports = router
