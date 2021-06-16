import { useState, useEffect, useRef } from 'react'
import Question from '../question/Question'
import Timer from './timer/Timer'

function Quiz({ questions, userScore, setRunning }) {
  let [currentQuestion, setCurrentQuestion] = useState(0)
  let [score, setScore] = useState(0)
  let timerRef = useRef(null)

  const endQuiz = () => {
    if (!score) setScore(1)
    const timeScore = timerRef.current
    console.log(timeScore)
    console.log(timerRef)
    setRunning(false)
  }


  const submitAnswer = (response) => {
    if (response) setScore(score = score + 100)
    if (currentQuestion === 9) endQuiz()
    setCurrentQuestion(currentQuestion += 1)
  }


  useEffect(() => {
    setScore(userScore)
  }, [])


  return (
    <div className='quiz'>
      <Timer ref={timerRef}/>
      <Question
        question={questions[currentQuestion]}
        submitAnswer={submitAnswer}
      />
    </div>
  )
}

export default Quiz
