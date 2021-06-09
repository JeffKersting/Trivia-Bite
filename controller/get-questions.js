const getQuestionsDAO = require('../dao/get-questions')

class GetQuestionsController {
  async getQuestions(req, res) {
    try {
      const questions = await getQuestionsDAO.getQuestions()
      console.log(questions)
      res.status(200).send(questions)
    } catch (err) {
      console.error(err)
    }
  }
}

module.exports = new GetQuestionsController()
