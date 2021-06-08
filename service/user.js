const userDAO = require('../dao/user')

class UserService {
  createUser(userDto) {
    const {name, email} = userDto
    return userDAO.createUser(name, email)
  }
}

module.exports = new UserService()
