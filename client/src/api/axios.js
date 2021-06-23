import axios from 'axios'

const fetchRequests = {

  errorHandler: (response) => {
    if (!response.ok) {
      const errorMessage = 'Uh oh! Our server is experiencing some difficulties right now, please refresh the page!'
      throw errorMessage
    }
    return response
  },

  getQuestions: async () => {
    const questions = []
    const questionsData = await axios.get('http://localhost:8080/questions')
    questionsData.data.forEach(question => {
      questions.push(question)
    })
    return questions
  },

  getUserData: (userEmail) => {
    return axios.get('http://localhost:8080/user', {
      params: {
        userEmail: userEmail
      }
    })
  },

  postUserData: (userName, userEmail, userToken) => {
    return axios.post('http://localhost:8080/user', {
      data: {
        name: userName,
        email: userEmail,
        token: userToken
      }
    })
  },

  getGroupData: (groupId) => {
    return axios.get('http://localhost:8080/group', {
      params: {
        groupId: groupId
      }
    })
    .then(data => Array.from(data.data))
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
