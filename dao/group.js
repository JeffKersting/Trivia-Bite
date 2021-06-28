const db = require('../db/db')

class GroupDAO {
  async createGroup(userId, groupName) {
    try {
      const [id] = await db('groups').insert({
        group_name: groupName
      })
      .returning('id')

      if(id) {
        const [group] = await db('users').where({ id: userId}).update({
          group_id: id
        }).returning('group_id')
        return group
      }
    } catch(err) {
      console.log(err)
    }
  }

  async getGroupData(groupId) {
    try {
      const groupMembers = await db('users').where({ group_id: groupId}).select('*')
      const groupName = await db('groups').where({ id: groupId }).returning('group_name')
      const groupData = {groupMembers, groupName}
      return groupData
    } catch(err) {
      console.log(err)
    }
  }

  async joinGroup(userId, groupId) {
    try {
      const [id] = await db('users').where({ id: userId }).update({
        group_id: groupId
      })
      .returning('group_id')
      return id
    } catch(err) {
      console.log(err)
    }
  }

  leaveGroup(userId, groupName) {
    try {
      db('users').where({ id: userId }).update({
        group_id: NULL
      })
    } catch(err) {
      console.log(err)
    }
  }
}

module.exports = new GroupDAO()
