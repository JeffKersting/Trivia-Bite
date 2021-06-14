import { useEffect, useState } from 'react'
import axios from 'axios'
import Quiz from '../quiz/Quiz'

function Home({ email }) {
  const [questions, setQuestions] = useState('')
  const [group, setGroup] = useState('')

  const getQuestions = async () => {
    const questions = []
    const questionsData = await axios.get('http://localhost:8080/questions')
    questionsData.data.forEach(question => {
      questions.push(question)
    })
    setQuestions(questions)
  }

  const getGroup = async () => {
    const group = []
    const groupData = await axios.get('http://localhost:8080/group')
    groupData.data.forEach(member => {
      group.push({name: member.name, score: member.daily_score})
    })
    setGroup(group)
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
