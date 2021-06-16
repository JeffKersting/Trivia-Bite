function Question({ question }) {

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
    console.log(answersArr)
  }

  const checkAnswer = (e) => {
    console.log(e.target.innerText)
    createAnswers()
  }

  return (
    <>
      <div>{question.category.replace(/&qu/g,'').replace(/ot\;/g,'')}</div>
      <div>{question.question.replace(/&qu/g,'').replace(/ot\;/g,'')}</div>
      <div onClick={checkAnswer}> 1 </div>
      <div onClick={checkAnswer}> 2 </div>
      <div onClick={checkAnswer}> 3 </div>
      <div onClick={checkAnswer}> 4 </div>

    </>
  )
}

export default Question
