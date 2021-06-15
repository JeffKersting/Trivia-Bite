import { useEffect, useState } from 'react'
import axios from 'axios'
import Quiz from '../quiz/Quiz'
import Sidebar from '../sidebar/Sidebar'

function Home({ email }) {
  const [questions, setQuestions] = useState('')

  const getQuestions = async () => {
    const questions = []
    const questionsData = await axios.get('http://localhost:8080/questions')
    questionsData.data.forEach(question => {
      questions.push(question)
    })
    setQuestions(questions)
  }

  useEffect(() => {
    getQuestions()
  }, [])

  return (
    <>
      <div>Welcome {email}</div>
      <Sidebar />
      {questions && <Quiz questions={questions} />}
    </>
  )
}

export default Home
