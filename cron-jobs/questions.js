const questionsService = require('../service/questions')
const fetch = require('node-fetch')

const cleanupString = (string) => {
  return string.replace(/&quot;/g, '').replace(/&#039;/g, '').replace(/&acute;/g, '').replace(/&reg;/g, '').replace(/&trade;/g, '')
}

const getQuestions = async () => {
  try {
    const questionsDto = []
    const questions = await fetch('https://opentdb.com/api.php?amount=10&type=multiple').then(response => response.json())
    questions.results.forEach(questionObj => {

      const {category, question, correct_answer, incorrect_answers} = questionObj
      const formattedQuestion = {
          category: category,
          question: cleanupString(question),
          correct: cleanupString(correct_answer),
          incorrect1: cleanupString(incorrect_answers[0]),
          incorrect2: cleanupString(incorrect_answers[1]),
          incorrect3: cleanupString(incorrect_answers[2])
        }
      questionsDto.push(formattedQuestion)
    })

    questionsService.createQuestions(questionsDto)
  } catch (err) {
    console.log(err)
  }
}

module.exports = getQuestions
