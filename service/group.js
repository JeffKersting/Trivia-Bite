const groupDAO = require('../dao/group')

class GroupService {
  createGroup(groupDto) {
    const {userId, groupName} = personDto
    return groupDAO.createGroup(userId, groupName)
  }
}

module.exports = new GroupService()
