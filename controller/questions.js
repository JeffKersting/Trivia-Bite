const questionsService = require('../service/questions')

class QuestionsController {
  async createQuestions(req, res) {
    try {
      const id = await questionsService.createQuestions(req.body)
      res.status(201).json(id)
    } catch (err) {
      console.error(err)
    }
  }
}

module.exports = new QuestionsController()
