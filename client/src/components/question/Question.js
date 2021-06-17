function Question({ question, submitAnswer }) {

  const correctAnswer = question.correct_answer.replace(/&qu/g,'').replace(/ot\;/g,'')


  const createAnswers = () => {
    const answers = []
    const answersArr = [
      correctAnswer,
      question.incorrect_1.replace(/&qu/g,'').replace(/ot\;/g,''),
      question.incorrect_2.replace(/&qu/g,'').replace(/ot\;/g,''),
      question.incorrect_3.replace(/&qu/g,'').replace(/ot\;/g,'')
    ]
    for (let i = answersArr.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let temp = answersArr[i]
      answersArr[i] = answersArr[j]
      answersArr[j] = temp
    }
    return answersArr
  }

  const checkAnswer = (e) => {
    e.target.innerText === correctAnswer ? submitAnswer(true) : submitAnswer(false)
  }

  return (
    <>
      <div>{question.category.replace(/&qu/g,'').replace(/ot\;/g,'')}</div>
      <div>{question.question.replace(/&qu/g,'').replace(/ot\;/g,'')}</div>
      {
        createAnswers().map((answer, index) =>
          <div onClick={checkAnswer} key={index}>{answer}</div>)
      }


    </>
  )
}

export default Question
