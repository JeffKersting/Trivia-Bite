const groupDAO = require('../dao/group')

class GroupService {
  createGroup(groupDto) {
    const {userId, groupName} = groupDto
    return groupDAO.createGroup(userId, groupName)
  }

  getGroupData(groupDto) {
    console.log('GROUP SERVICE DTO*****', groupDto)
    const {groupId} = groupDto
    return groupDAO.getGroupData(groupId)
  }
}

module.exports = new GroupService()
