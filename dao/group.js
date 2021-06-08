const db = require('../db/db')

class GroupDAO {
  async createGroup(userId, groupName) {
    const [id] = await db('groups').insert({
      user_id: userId,
      group_name: groupName
    })
    .returning('id')

    return id;
  }
}

module.exports = new GroupDAO()
