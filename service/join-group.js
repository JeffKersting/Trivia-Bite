const joinDAO = require('../dao/join-group')

class JoinGroupService {
  joinGroup(joinDto) {
    const {userId, groupName} = joinDto
    return joinDAO.joinGroup(userId, groupName)
  }
}

module.exports = new JoinGroupService()
