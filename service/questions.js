const questionsDAO = require('../dao/questions')

class QuestionsService {
  createQuestions(questionsDto) {
    const {category, question, correct, incorrect1, incorrect2, incorrect3} = questionsDto
    return questionsDAO.createQuestions(category, question, correct, incorrect1, incorrect2, incorrect3)
  }
}

module.exports = new QuestionsService()
