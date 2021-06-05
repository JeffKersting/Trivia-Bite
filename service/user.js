const userDAO = require('../dao/user')

class UserService {
  createPerson(personDto) {
    const {name, email} = personDto
    return userDAO.createPerson(name, email)
  }
}

module.exports = new UserService()
