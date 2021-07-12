const questionsService = require('../service/questions')
const fetch = require('node-fetch')

const findAndReplace = (string) => {
  console.log('STRING REPLACEMENT', string)
  const cleanedString = string.replace(/&quot;/g, '').replace(/&#039;/g, '')
  console.log('CLEANED STRING', cleanedString)
  return string
}

const getQuestions = async () => {
  try {
    const questionsDto = []
    const questions = await fetch('https://opentdb.com/api.php?amount=10&type=multiple').then(response => response.json())
    questions.results.forEach(questionObj => {

      const {category, question, correct_answer, incorrect_answers} = questionObj
      const formattedQuestion = {
          category: category,
          question: findAndReplace(question),
          correct: findAndReplace(correct_answer),
          incorrect1: findAndReplace(incorrect_answers[0]),
          incorrect2: findAndReplace(incorrect_answers[1]),
          incorrect3: findAndReplace(incorrect_answers[2])
        }
      questionsDto.push(formattedQuestion)
    })

    questionsService.createQuestions(questionsDto)
  } catch (err) {
    console.log(err)
  }
}

module.exports = getQuestions
