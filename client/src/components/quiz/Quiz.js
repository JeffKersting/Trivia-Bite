import { useState, useEffect, useRef, useCallback } from 'react'
import Question from '../question/Question'
import Timer from './timer/Timer'



function Quiz({ questions, userScore, setRunning, setTime, setQuizScore, updateScore }) {
  let [currentQuestion, setCurrentQuestion] = useState(0)
  let [score, setScore] = useState(userScore)
  const [completed, setCompleted] = useState(false)

  const endQuiz = () => {
    if (!score) setScore(1)
    setRunning(false)
  }

  const submitAnswer = (response) => {
    if (response) setScore(score = score + 100)
    if (currentQuestion === 9) setCompleted(true)
    setCurrentQuestion(currentQuestion = currentQuestion + 1)
  }

  const calculateScore = (time) => {
    setTime(time)
    setRunning(false)
  }


  useEffect(() => {
      setQuizScore(score)
  }, [completed])

  return (
    <div className='quiz'>
      { !completed &&
        <>
          <Timer calculateScore={calculateScore} />
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
