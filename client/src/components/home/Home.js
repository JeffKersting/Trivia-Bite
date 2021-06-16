import { useEffect, useState } from 'react'
import axios from 'axios'
import Quiz from '../quiz/Quiz'
import Sidebar from '../sidebar/Sidebar'

function Home({ email }) {
  const [questions, setQuestions] = useState('')
  const [userData, setUserData] = useState('')

  const getQuestions = async () => {
    const questions = []
    const questionsData = await axios.get('http://localhost:8080/questions')
    questionsData.data.forEach(question => {
      questions.push(question)
    })
    setQuestions(questions)
  }

  const getUserData = async () => {
    const userData = await axios.get('http://localhost:8080/user', {
      params: {
        userEmail: email
      }
    })
    setUserData(userData.data[0])
  }

  useEffect(() => {
    getQuestions()
    getUserData()
  }, [])

  return (
    <div className='home'>
      <Sidebar />
      <div>
        {questions && <Quiz questions={questions} userScore={userData.daily_score}/>}
      </div>
    </div>
  )
}

export default Home
