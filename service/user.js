const userDAO = require('../dao/user')

class UserService {
  createUser(userDto) {
    const {name, email} = userDto
    return userDAO.createUser(name, email)
  }

  getUserData(userDto) {
    const { userEmail } = userDto
    return userDAO.getUserData(userEmail)
  }
}

module.exports = new UserService()
