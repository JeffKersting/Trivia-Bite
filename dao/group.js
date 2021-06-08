const db = require('../db/db')

class GroupDAO {
  async createGroup(userId, groupName) {
    const [id] = await db('groups').insert({
      group_name: groupName
    })
    .returning('group_name')

    return id;
  }
}

module.exports = new GroupDAO()
