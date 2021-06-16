import { useState, useEffect } from 'react'
import Question from '../question/Question'

function Quiz({ questions, userScore }) {
  const [quizRunning, setRunning] = useState(false)
  let [currentQuestion, setCurrentQuestion] = useState(0)
  let [score, setScore] = useState(userScore)
  let time = 150

  const checkScore = () => {
    if (userScore > 0) {
      return <div>Already Taken</div>
    } else {
      return <button onClick={beginQuiz}>Start Quiz</button>
    }
  }

  const beginQuiz = () => {
    setRunning(true)
    updateQuiz()
  }

  const updateQuiz = () => {
    time -= 1
    if (time === 0) {
      setRunning(false)
      if (!score) setScore(1)
      return
    } else {
      setTimeout(() => updateQuiz(), 1000)
    }
  }

  const submitAnswer = (response) => {
    if (response) setScore(score = score + 100)
    if (currentQuestion === 8) setRunning(false)
    setCurrentQuestion(currentQuestion += 1)
  }

  useEffect(() => {
    checkScore()
  }, [])


  return (
    <div className='quiz'>
      <div>{time}</div>
      <div>{score}</div>
      {!quizRunning && checkScore()}
      {quizRunning &&
        <Question
          question={questions[currentQuestion]}
          submitAnswer={submitAnswer}
        />
      }
    </div>
  )
}

export default Quiz
