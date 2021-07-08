import { useEffect, useState } from 'react'
import axiosRequests from '../../api/axios'
import Quiz from '../quiz/Quiz'
import Sidebar from '../sidebar/Sidebar'

function Home({ user, setUser, setLoading }) {
  const [questions, setQuestions] = useState('')
  const [quizRunning, setRunning] = useState(false)

  const getData = async () => {
    const questions = await axiosRequests.getQuestions()
    setQuestions(questions)
  }

  const beginQuiz = () => {
    setRunning(true)
  }

  const checkUserDaily = () => {
    if (!user.daily_score) {
      return <button className='startQuizBtn' onClick={beginQuiz}>Take Quiz</button>
    } else {
      return <div className='quiz-status'>You have taken today's quiz. Check back tomorrow!</div>
    }
  }

  const updateScore = async () => {
    const updatedUserData = await axiosRequests.updateUserScore(user.id, user.daily_score)
    setUser(updatedUserData)
  }

  window.onbeforeunload = (event) => {
    const e = event || window.event
    if (e && quizRunning) {
      const updatedUserData = axiosRequests.updateUserScore(user.id, 10)
      return
    }
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (quizScore || quizTime) {
      updateScore()
    }
  }, [quizRunning])

  return (

    <div className='home'>
      <Sidebar user={user} />
      {!quizRunning && checkUserDaily()}
      {quizRunning &&
        <Quiz
        questions={questions}
        user={user}
        setRunning={setRunning}
        />
      }
    </div>
  )
}

export default Home
