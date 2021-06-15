const groupService = require('../service/group')


class GroupController {
  async createGroup(req, res) {
    try {
      const id = await groupService.createGroup(req.body)
      res.status(201).json(id)
    } catch (err) {
      console.error(err)
    }
  }

  async getGroupData(req, res) {
    try {
      const groupData = await groupService.getGroupData(req.body)
      res.status(201).json(groupData)
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = new GroupController()
