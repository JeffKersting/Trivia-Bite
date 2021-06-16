import { useState, useEffect } from 'react'
import Question from '../question/Question'
import Timer from './timer/Timer'

function Quiz({ questions, userScore }) {
  const [quizRunning, setRunning] = useState(false)
  let [currentQuestion, setCurrentQuestion] = useState(0)
  let [score, setScore] = useState(null)



  const checkScore = () => {
    if (userScore > 0) {
      return <div>Already Taken</div>
    } else {
      return <button onClick={beginQuiz}>Start Quiz</button>
    }
  }

  const beginQuiz = () => {
    setRunning(true)

  }



  const submitAnswer = (response) => {
    if (response) setScore(score = score + 100)
    if (currentQuestion === 8) setRunning(false)
    setCurrentQuestion(currentQuestion += 1)
  }

  const endQuiz = () => {
    if (!score) setScore(1)
    setRunning(false)
  }

  useEffect(() => {
    checkScore()
    setScore(userScore)
  }, [])


  return (
    <div className='quiz'>


      {!quizRunning && checkScore()}
      {quizRunning &&
        <>
          <Timer endQuiz={endQuiz}/>
          <div>{score}</div>
          <Question
            question={questions[currentQuestion]}
            submitAnswer={submitAnswer}
          />
        </>
      }
    </div>
  )
}

export default Quiz
