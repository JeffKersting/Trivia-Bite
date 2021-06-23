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
    .then(data => data.data[0])
  },

  postUserData: (userName, userEmail) => {
    return axios({
      method: 'POST',
      url: 'http://localhost:8080/user',
      data: {
        name: userName,
        email: userEmail
      }
    })
  },

  getGroupData: (groupId) => {
    return axios.get('http://localhost:8080/group', {
      params: {
        groupId: groupId
      }
    })
    .then(data => data.data)
  },

  updateUserScore: (userId, score) => {
    return axios.patch('http://localhost:8080/user', {
      params: {
        userId: userId,
        score: score
      }
    })
    .then(data => data.data[0])
  }
}

export default fetchRequests
