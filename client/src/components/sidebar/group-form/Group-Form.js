import { useState } from 'react'

function GroupForm({ formHandler }) {
  const [groupInput, setInput] = useState('')

  const inputHandler = (event) => {
    event.preventDefault()
    setInput(event.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    formHandler(e.target.name, groupInput)
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Group Name...'
        value={groupInput}
        autoComplete='off'
        onChange={e => inputHandler(e)}

      />
      <button
        name='join'
        onClick={e => submitHandler(e)}
      >Join Group</button>
      <button
        name='create'
        onClick={e => submitHandler(e)}
      >Create Group</button>
    </form>
  )
}

export default GroupForm
