const joinDAO = require('../dao/join-group')
const db = require('../db/db')

const getGroupId = async (groupName) => {
  try {
    const groupId = await db('groups').update({}).where({ group_name: groupName}).select('id')
    return groupId[0]['id']
  } catch (err) {
    console.log(err)
  }
}

class JoinGroupService {
  joinGroup = async (joinDto) => {
    const {userId, groupName} = joinDto
    const groupId = await getGroupId(groupName)
    return joinDAO.joinGroup(userId, groupId)
  }
}

module.exports = new JoinGroupService()
