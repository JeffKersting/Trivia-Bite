import { useEffect, useState } from 'react'
import axios from 'axios'
import axiosRequests from '../../api/axios'
import Quiz from '../quiz/Quiz'
import Sidebar from '../sidebar/Sidebar'

function Home({ email }) {
  const [questions, setQuestions] = useState('')
  const [userData, setUserData] = useState('')
  const [quizRunning, setRunning] = useState(false)

  const getData = async () => {
    const questions = await axiosRequests.getQuestions()
    const userData = await axiosRequests.getUserData(email)
    setQuestions(questions)
    setUserData(userData.data[0])
  }

  const beginQuiz = () => {
    setRunning(true)
  }

  const checkUserDaily = () => {
    if (!userData.daily_score) {
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
      {userData && <Sidebar groupId={userData.group_id}/>}
      {!quizRunning && checkUserDaily()}
      {quizRunning &&
        <Quiz
          questions={questions}
          userScore={userData.daily_score}
          setRunning={setRunning}
        />
      }
      <button onClick={update}>Update Score</button>
    </div>
  )
}

export default Home
