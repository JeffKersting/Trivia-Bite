const userService = require('../service/user')

class UserController {
  async createUser(req, res) {
    try {
      const id = await userService.createUser(req.body)
      res.status(201).json(id)
    } catch (err) {
      console.error(err)
    }
  }

  async getUserData(req, res) {
    try {
      const userData = await userService.getUserData(req.query)
      res.status(201).json(userData)
    } catch (err) {
      console.error(err)
    }
  }

  async updateUserScore(req, res) {
    try {
      userService.updateUserScore(req.body.params)
      res.status(201)
    } catch (err) {
      console.error(err)
    }
  }
}

module.exports = new UserController()
