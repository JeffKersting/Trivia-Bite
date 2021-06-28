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

  async joinGroup(req, res) {
    try {
      const id = await groupService.joinGroup(req.body.params)
      res.status(201).json(id)
    } catch (err) {
      console.error(err)
    }
  }

  async leaveGroup(req, res) {
    try {
      const id = await groupService.leaveGroup(req.body.params)
      res.status(201)
    } catch (err) {
      console.error(err)
    }
  }

  async getGroupData(req, res) {
    try {
      const groupData = await groupService.getGroupData(req.query)
      res.status(201).json(groupData)
    } catch (err) {
      console.log(err)
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

module.exports = new GroupController()
