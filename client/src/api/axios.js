import axios from 'axios'

const api = process.env.PORT || 'http://localhost:8080/'

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
    const questionsData = await axios.get(api + 'questions')
    questionsData.data.forEach(question => {
      questions.push(question)
    })
    return questions
  },

  getUserData: (userEmail) => {
    return axios.get(api + 'user', {
      params: {
        userEmail: userEmail
      }
    })
    .then(data => data.data[0])
  },

  postUserData: (userName, userEmail) => {
    return axios({
      method: 'POST',
      url: api + 'user',
      data: {
        name: userName,
        email: userEmail
      }
    })
  },

  updateUserScore: (userId, score) => {
    return axios.patch(api + 'user', {
      params: {
        userId: userId,
        score: score
      }
    })
    .then(data => data.data[0])
  },

  getGroupData: (groupId) => {
    return axios.get(api + 'group', {
      params: {
        groupId: groupId
      }
    })
    .then(data => {
      const groupMembers = data.data.groupMembers
      const groupName = data.data.groupName[0].group_name
      return {members: groupMembers, name: groupName}
    })
  },

  createGroup: async (userId, groupName) => {
    return axios({
      method: 'POST',
      url: api + 'group',
      data: {
        userId: userId,
        groupName: groupName
      }
    })
  },

  joinGroup: async (userId, groupName) => {
    const groupId = await axios.patch(api + 'group', {
      params: {
        action: 'join',
        userId: userId,
        groupName: groupName
      }
    })
    .then(data => data.data)
    return(groupId)
  },

  leaveGroup: async (userId) => {
    const groupId = await axios.patch(api + 'group', {
      params: {
        action: 'leave',
        userId: userId
      }
    })
  }
}

export default fetchRequests
