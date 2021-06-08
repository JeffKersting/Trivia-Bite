const questionsDAO = require('../dao/questions')
const db = require('../db/db')

const clearQuestions = async () => {
  const deleted = await db('questions').del()
  return deleted
}

class QuestionsService {
  createQuestions = async (questionsDto) => {
    const deleted = await clearQuestions().then(
      questionsDto.forEach(questionObject => {
        const {category, question, correct, incorrect1, incorrect2, incorrect3} = questionObject
        return questionsDAO.createQuestions(category, question, correct, incorrect1, incorrect2, incorrect3)
      })
    )
  }
}


module.exports = new QuestionsService()
