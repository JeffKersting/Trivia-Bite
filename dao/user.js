const db = require('../db/db')

class UserDAO {
  async createUser(name, email) {
    const [id] = await db('users').insert({
      name: name,
      email: email
    })
    .returning('id')

    return id;
  }
}

module.exports = new UserDAO()