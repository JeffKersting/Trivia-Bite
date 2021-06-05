const db = require('../db/db')

class PersonDAO {
  async createPerson(name, email) {
    const [id] = await db('user').insert({
      name: name,
      email: email
    })
    .returning('id')

    return id;
  }
}
