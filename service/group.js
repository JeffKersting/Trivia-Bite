const groupDAO = require('../dao/group')

class GroupService {
  createGroup(groupDto) {
    const {userId, groupName} = groupDto
    return groupDAO.createGroup(userId, groupName)
  }
}

module.exports = new GroupService()
