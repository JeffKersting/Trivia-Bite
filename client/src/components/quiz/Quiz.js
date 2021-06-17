import { useState, useEffect, useRef, useCallback } from 'react'
import Question from '../question/Question'
import Timer from './timer/Timer'



function Quiz({ questions, userScore, setRunning }) {
  let [currentQuestion, setCurrentQuestion] = useState(0)
  let [score, setScore] = useState(userScore)


  const endQuiz = () => {
    if (!score) setScore(1)
    setRunning(false)
  }

  const submitAnswer = (response) => {
    if (response) setScore(score = score + 100)
    if (currentQuestion === 9) endQuiz()
    setCurrentQuestion(currentQuestion = currentQuestion + 1)
  }

  const calculateScore = (time) => {
    const totalScore = (time * 10) + score
    console.log(totalScore)
  }


  useEffect(() => {

    return () => {
      console.log('SCORE', score)
    }
  }, [])

  return (
    <div className='quiz'>
      <Timer calculateScore={calculateScore}/>
      <Question
        question={questions[currentQuestion]}
        submitAnswer={submitAnswer}
      />
    </div>
  )
}

export default Quiz
