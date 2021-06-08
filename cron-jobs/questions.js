const fetch = require('node-fetch')

const getQuestions = async () => {
  try {
    const questions = await fetch('https://opentdb.com/api.php?amount=1&type=multiple').then(response => response.json())
    console.log(questions.results)
    const {category, question, correct_answer, incorrect_answers} = questions.results[0]

    console.log('CATEGORY', category)
    console.log('CORRECT', correct_answer)
    console.log('INCORRECT', incorrect_answers)
  } catch (err) {
    console.log(err)
  }
}

module.exports = getQuestions()
