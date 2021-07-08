import { useEffect, useState } from 'react'
import axiosRequests from '../../api/axios'
import Quiz from '../quiz/Quiz'
import Sidebar from '../sidebar/Sidebar'

function Home({ user, setUser }) {
  const [questions, setQuestions] = useState('')
  const [quizRunning, setRunning] = useState(false)
  const [quizScore, setQuizScore] = useState(null)
  const [quizTime, setTime] = useState(null)
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    const questions = await axiosRequests.getQuestions()
    setQuestions(questions)
    setLoading(false)
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
    setLoading(true)
    const totalScore = quizScore + quizTime * 10
    const updatedUserData = await axiosRequests.updateUserScore(user.id, totalScore)
    setUser(updatedUserData)
    setLoading(false)
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
    console.log('ENVIRONMENTAL DB URL', process.env.REACT_APP_DB_URL)
  }, [])

  useEffect(() => {
    if (quizScore || quizTime) {
      updateScore()
    }
  }, [quizScore])

  return (

    <div className='home'>
      { !loading &&
        <>
          <Sidebar user={user} />
          {!quizRunning && checkUserDaily()}
          {quizRunning &&
            <Quiz
            questions={questions}
            userScore={user.daily_score}
            setRunning={setRunning}
            setQuizScore={setQuizScore}
            setTime={setTime}
            updateScore={updateScore}
            />
          }
        </>
      }
      { loading && <div>Loading...</div>}
    </div>
  )
}

export default Home
