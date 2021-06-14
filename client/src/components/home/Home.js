import { useEffect, useState } from 'react'
import axios from 'axios'
import Quiz from '../quiz/Quiz'

function Home({ email }) {
  const [questions, setQuestions] = useState('')
  const [group, setGroup] = useState('')

  const getQuestions = async () => {
    const questions = []
    const group = []
    const questionsData = await axios.get('http://localhost:8080/questions')
    questionsData.data.forEach(question => {
      questions.push(question)
    })

    setQuestions(questions)
    console.log(questions[0].category)
  }

  useEffect(() => {
    getQuestions()
  }, [])

  return (
    <>
      <div>Welcome {email}</div>
      <Quiz questions={questions} />
    </>
  )
}

export default Home
