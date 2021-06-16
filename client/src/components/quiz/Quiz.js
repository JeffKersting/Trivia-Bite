import Question from '../question/Question'

function Quiz({ questions }) {
  return (
    <div className='quiz'>

      {
        questions.map((question, index) =>
          <Question question={question} key={index}/>
        )
      }
    </div>
  )
}

export default Quiz
