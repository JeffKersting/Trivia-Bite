function Question({ question, submitAnswer }) {
  /*
    JSON answer cleanup for correct answer
  */
  const correctAnswer = question.correct_answer


  const createAnswers = () => {
    const answers = []
    /*
      JSON answer cleanup for incorrect answers
    */
    const answersArr = [
      correctAnswer,
      question.incorrect_1,
      question.incorrect_2,
      question.incorrect_3
    ]
    /*
      forloop randomizes the order in which the answers are displayed
    */
    for (let i = answersArr.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let temp = answersArr[i]
      answersArr[i] = answersArr[j]
      answersArr[j] = temp
    }
    return answersArr
  }

  /*
    answerFeedback runs a conditional check for answer correctness, and
    changes the answer color accordingly. The setTimeout resets the answer
    background color when the new questions are populated.
  */
  const answerFeedback = (target, result) => {
    result ? target.style.backgroundColor = '#90EE90' : target.style.backgroundColor = '#F76C6C'
    setTimeout(() => target.style.backgroundColor = '#24305E', 400)
  }

  /*
    Check answer checks for answer correctness and first fires answer feedBack,
    then submits the answer (submitAnswer on Quiz.js), after half second.
  */
  const checkAnswer = (e) => {
    e.target.innerText === correctAnswer ? answerFeedback(e.target, true) : answerFeedback(e.target, false)
    setTimeout(() => {
      e.target.innerText === correctAnswer ? submitAnswer(true, e.target) : submitAnswer(false, e.target)
    }, 500)
  }

  return (
    <>
      <div className='category'>{question.category}</div>
      <div className='question'>{question.question}</div>
      <div className='answers'>
      {
        createAnswers().map((answer, index) =>
          <div onClick={checkAnswer} key={index} style={{ backgroundColor: '#24305E' }}>{answer}</div>)
      }
      </div>

    </>
  )
}

export default Question
