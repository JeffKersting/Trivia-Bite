import { useState, useEffect } from 'react'
import Question from '../question/Question'

function Quiz({ questions, userScore }) {
  const [quizRunning, setRunning] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(userScore)
  // let [timer, setTimer] = useState(300)
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
      return
    } else {
      setTimeout(() => updateQuiz(), 100)
    }
  }

  useEffect(() => {
    checkScore()
  }, [])


  return (
    <div className='quiz'>
      {!quizRunning && checkScore()}
      {quizRunning && <Question question={questions[currentQuestion]} /> }
    </div>
  )
}

export default Quiz
