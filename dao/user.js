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

  async getUserData(userEmail) {
    try {
      const userData = await db('users').where({ email: userEmail}).select('*')
      return userData
    } catch(err) {
      console.log(err)
    }
  }
}

module.exports = new UserDAO()
