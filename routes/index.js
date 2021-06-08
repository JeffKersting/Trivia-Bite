const express = require('express')
const userController = require('../controller/user')
const groupController = require('../controller/group')


const router = express.Router()
router.post('/user', userController.createUser)
router.post('/group', groupController.createGroup)


module.exports = router
