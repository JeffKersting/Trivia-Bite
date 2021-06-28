const groupDAO = require('../dao/group')
const db = require('../db/db')

const getGroupId = async (groupName) => {
  try {
    const groupId = await db('groups').where({ group_name: groupName}).select('id')
    if (!groupId.length) return null
    return groupId[0]['id']
  } catch (err) {
    console.log(err)
  }
}

class GroupService {
  createGroup(groupDto) {
    const {userId, groupName} = groupDto
    return groupDAO.createGroup(userId, groupName)
  }

  getGroupData(groupDto) {
    const {groupId} = groupDto
    return groupDAO.getGroupData(groupId)
  }

  async joinGroup(joinDto) {
    const {userId, groupName} = joinDto
    const groupId = await getGroupId(groupName)
    if (!groupId) {
      console.log('error')
      return
    }
    return groupDAO.joinGroup(userId, groupId)
  }

  leaveGroup(leaveDto) {
    const { userId } = leaveDto
    return groupDAO.leaveGroup(userId)
  }
}

module.exports = new GroupService()
