const db = require('../db/db')

class GetQuestionsDAO {
  async getQuestions() {
    const questions = await db('questions').select()
    return questions
  }
}


module.exports = new GetQuestionsDAO
