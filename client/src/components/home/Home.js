import { useEffect, useState } from 'react'
import axios from 'axios'
import axiosRequests from '../../api/axios'
import Quiz from '../quiz/Quiz'
import Sidebar from '../sidebar/Sidebar'

function Home({ user }) {
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
      return <button onClick={beginQuiz}>Take Quiz</button>
    } else {
      return <div>You have already taken todays quiz</div>
    }
  }

  const update = () => {
    axiosRequests.updateUserScore(21, 2500)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='home'>
      {user && <Sidebar groupId={user.group_id}/>}
      {!quizRunning && checkUserDaily()}
      {quizRunning &&
        <Quiz
          questions={questions}
          userScore={user.daily_score}
          setRunning={setRunning}
        />
      }
      <button onClick={update}>Update Score</button>
    </div>
  )
}

export default Home
