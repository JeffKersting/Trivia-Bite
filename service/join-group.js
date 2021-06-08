const joinDAO = require('../dao/join-group')

const getGroupId = async (groupName) => {
  try {
    const groupId = await knex('groups').where({ group_name: groupName}).fetchValue('id')
    return groupId
  } catch (err) {
    res.status(500).json({ error })
  }
}

class JoinGroupService {
  joinGroup(joinDto) {
    const {userId, groupName} = joinDto
    return joinDAO.joinGroup(userId, groupName)
  }
}

module.exports = new JoinGroupService()
