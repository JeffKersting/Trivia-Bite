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
      const updatedUserData = await userService.updateUserScore(req.body.params)
      res.status(201).json(updatedUserData)
    } catch (err) {
      console.error(err)
    }
  }

  checkRoute = (req, res) => {
    if (req.body.params.action === 'join') {
      this.joinGroup(req, res)
    } else {
      this.createGroup(req, res)
    }
  }
}

module.exports = new UserController()
