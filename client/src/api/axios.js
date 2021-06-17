import axios from 'axios'

const fetchRequests = {

  errorHandler: (response) => {
    if (!response.ok) {
      const errorMessage = 'Uh oh! Our server is experiencing some difficulties right now, please refresh the page!'
      throw errorMessage
    }
    return response
  },

  fetchQuestions: () => {

  },

  getUserData: (userEmail) => {
    return axios.get('http://localhost:8080/user', {
      params: {
        userEmail: userEmail
      }
    })
  },

  updateUserScore: (userId, score) => {
    axios.patch('http://localhost:8080/user', {
      params: {
        userId: userId,
        score: score
      }
    })
  }
}

export default fetchRequests
