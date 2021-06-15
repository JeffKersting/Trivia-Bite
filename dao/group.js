const db = require('../db/db')

class GroupDAO {
  async createGroup(userId, groupName) {
    const [id] = await db('groups').insert({
      group_name: groupName
    })
    .returning('id')

    if(id) {
      const [group] = await db('users').where({ id: userId}).update({
         group_id: id
      })
      .returning('group_id')
    }
  }

  async getGroupData(groupId) {
    try {
      const [groupData] = await db('groups').where({ id: groupId}).returning(*)
      return groupData
    } catch(err) {
      console.log(err)
    }
  }
}

module.exports = new GroupDAO()
