import { useState, useEffect } from 'react'
import Question from '../question/Question'

function Quiz({ questions, userScore }) {
  const [quizRunning, setRunning] = useState(false)
  const [quizTaken, setTaken] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [timer, setTimer] = useState(300)
  const [score, setScore] = useState(0)

  const checkScore = () => {
    userScore > 0 ? setTaken(true) : setTaken(false)
  }

  

  useEffect(() => {
    checkScore()
  }, [])


  return (
    <div className='quiz'>
      {!quizTaken && <button>Start Quiz</button>}
      {quizRunning && <Question question={questions[currentQuestion]} /> }
    </div>
  )
}

export default Quiz
