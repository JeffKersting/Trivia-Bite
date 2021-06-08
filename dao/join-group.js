const db = require('../db/db')

class JoinGroupDAO {
  async joinGroup(userId, groupId) {
    try {
      const [id] = await db('users').where({ id: userId }).update({
        group_id: groupId
      })
      .returning('group_id')

    } catch(err) {
      console.log(err)
    }
  }
}

module.exports = new JoinGroupDAO()
