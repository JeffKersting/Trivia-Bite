import { useEffect, useState } from 'react'
import axiosRequests from '../../api/axios'
import Quiz from '../quiz/Quiz'
import Sidebar from '../sidebar/Sidebar'

function Home({ user, setUser, setLoading }) {
  const [questions, setQuestions] = useState('')
  const [quizRunning, setRunning] = useState(false)
  /*
   quizScore and quizTime are not used in calculating score, but are checked
   with a useEffect (line 50-54), to ensure that user has taken quiz before
   submitting score
  */
  const [quizScore, setQuizScore] = useState(null)
  const [quizTime, setTime] = useState(null)

  const getData = async () => {
    const questions = await axiosRequests.getQuestions()
    setQuestions(questions)
  }

  /*
    beginQuiz triggers when user clicks 'Take Quiz' button (line 30).
    This will conditionally render the Quiz component (line 66)
  */
  const beginQuiz = () => {
    setRunning(true)
  }
  /*
    checkUserDaily runs a conditional check to see if a user has already taken
    the days quiz. If not, the 'Take Quiz' button is rendered.
  */
  const checkUserDaily = () => {
    if (!user.daily_score) {
      return <button className='startQuizBtn' onClick={beginQuiz}>Take Quiz</button>
    } else {
      return <div className='quiz-status'>You have taken today's quiz. Check back tomorrow!</div>
    }
  }

  /*
    updateScore fires in useEffect (line 71-75), using quizRunning as an array
    dependency. To ensure submit score is not fired on component mount,
    conditional check occurs (see comments)
  */
  const updateScore = async () => {
    const updatedUserData = await axiosRequests.updateUserScore(user.id, user.daily_score)
    setUser(updatedUserData)
    setLoading(true)
  }

  /*
    window.onbeforeunload runs a conditional check whenever the page is
    refreshed. If a user refreshes the page when the quiz is running,
    a score of 10 is automatically submitted.
  */
  window.onbeforeunload = (event) => {
    const e = event || window.event
    if (e && quizRunning) {
      const updatedUserData = axiosRequests.updateUserScore(user.id, 10)
      return
    }
  }

  /*
    On component mount, question data is retrieved
  */
  useEffect(() => {
    getData()
  }, [])

  /*
    Because useEffect dependency is quizRunning, a conditional check is
    performed before updating the score. quizScore and quizTime are set on
    unmount of the Quiz component and Timer component, respectively.
  */
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
        setQuizScore={setQuizScore}
        setTime={setTime}
        updateScore={updateScore}
        />
      }
    </div>
  )
}

export default Home
