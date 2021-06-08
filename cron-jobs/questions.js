const questionsService = require('../service/questions')
const fetch = require('node-fetch')


const getQuestions = async () => {
  try {
    const questionsDto = []
    const questions = await fetch('https://opentdb.com/api.php?amount=10&type=multiple').then(response => response.json())
    questions.results.forEach(questionObj => {

      const {category, question, correct_answer, incorrect_answers} = questionObj
      const formattedQuestion = {
          category: category,
          question: question,
          correct: correct_answer,
          incorrect1: incorrect_answers[0],
          incorrect2: incorrect_answers[1],
          incorrect3: incorrect_answers[2]
        }
      questionsDto.push(formattedQuestion)
    })

    questionsService.createQuestions(questionsDto)
  } catch (err) {
    console.log(err)
  }
}

module.exports = getQuestions
