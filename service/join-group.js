const joinDAO = require('../dao/join-group')
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

class JoinGroupService {
  joinGroup = async (joinDto) => {
    const {userId, groupName} = joinDto
    const groupId = await getGroupId(groupName)
    if (!groupId) {
      console.log('error')
      return
    }
    return joinDAO.joinGroup(userId, groupId)
  }
}

module.exports = new JoinGroupService()
