const db = require('../db/db')

class QuestionsDAO {
  async createQuestions(category, question, correct, incorrect1, incorrect2, incorrect3) {
    const [id] = await db('questions').insert({
      category: category,
      question: question,
      correct_answer: correct,
      incorrect_1: incorrect1,
      incorrect_2: incorrect2,
      incorrect_3: incorrect3
    })
    .returning('id')

    return id;
  }
}

module.exports = new QuestionsDAO()
