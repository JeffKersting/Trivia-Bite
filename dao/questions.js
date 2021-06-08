const db = require('../db/db')

class QuestionsDAO {
  async createQuestions(category, question, correct, incorrect1, incorrect2, incorrect3) {
    const [id] = await db('questions').insert({
      category: category,
      question: question,
      correct: correct,
      incorrect1: incorrect1,
      incorrect2: incorrect2,
      incorrect3: incorrect3
    })
    .returning('id')

    return id;
  }
}

module.exports = new QuestionsDAO()
