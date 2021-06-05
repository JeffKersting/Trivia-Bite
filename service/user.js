const userDAO = require('../dao/user')

class UserService {
  createUser(personDto) {
    const {name, email} = personDto
    return userDAO.createUser(name, email)
  }
}

module.exports = new UserService()
