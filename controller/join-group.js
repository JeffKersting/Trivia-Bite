const joinGroupService = require('../service/join-group')

class JoinGroupController {
  async joinGroup(req, res) {
    try {
      const id = await joinGroupService.joinGroup(req.body)
      res.status(201).json(id)
    } catch (err) {
      console.error(err)
    }
  }
}

module.exports = new JoinGroupController()