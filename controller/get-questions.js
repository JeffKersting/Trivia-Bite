const getQuestionsService = require('../service/get-questions')

class GetQuestionsController {
  async getQuestions(req, res) {
    try {
      const questions = await getQuestionsService.getQuestions()
      res.status(200)
    } catch (err) {
      console.error(err)
    }
  }
}

module.exports = new GetQuestionsController()
