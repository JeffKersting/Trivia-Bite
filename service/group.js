const groupDAO = require('../dao/group')

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

  async joinGroup(joinDto) => {
    const {userId, groupName} = joinDto
    const groupId = await getGroupId(groupName)
    if (!groupId) {
      console.log('error')
      return
    }
    return joinDAO.joinGroup(userId, groupId)
  }
}

module.exports = new GroupService()
