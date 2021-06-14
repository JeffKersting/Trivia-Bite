import Question from '../question/Question'

function Quiz({ questions }) {
  console.log(questions)
  return (
    <>
      <div>Hello</div>
      {
        questions.map((question, index) =>
          <Question question={question} key={index}/>
        )
      }
    </>
  )
}

export default Quiz
