import { useState, useEffect } from 'react'
import Question from '../question/Question'
import Timer from './timer/Timer'

function Quiz({ questions, user, setRunning, setTime, setQuizScore, updateScore }) {
  let [currentQuestion, setCurrentQuestion] = useState(0)
  let [score, setScore] = useState(user.daily_score)
  const [completed, setCompleted] = useState(false)

  /*
    Submit answer checks response validity, and updates the score accordingly.
  */
  const submitAnswer = (response) => {
    if (response) setScore(score = score + 100)
    /*
    Conditional to check if all questions have been answered. If true, score
    is set on Home.js, and setCompleted(true) fires to begin unmount process
    By setting the score on Home.js, conditional check to ensure user has
    taken quiz occurs (Home.js line 78)
    */
    if (currentQuestion === 9) {
      user.daily_score = score
      setQuizScore(score)
      setCompleted(true)
    }
    setCurrentQuestion(currentQuestion = currentQuestion + 1)
  }

  const calculateScore = (time) => {
    user.daily_score += time * 10
    setCompleted(true)
  }

  /*
    Cleanup function run to check if user has not answered any questions
    correct and has run out of time, if true score is set to 10. Else quiz
    score is updated, and setRunning(false) triggers component unmount.
  */
  useEffect(() => {

    return () => {
      if (!score) {
        setQuizScore(10)
      } else {
        setQuizScore(score)
      }
      setRunning(false)
    }
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
