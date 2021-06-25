import { useState } from 'react'

function GroupForm({ formHandler }) {
  const [groupInput, setInput] = useState('')

  const inputHandler = (event) => {
    event.preventDefault()
    setInput(event.target.value)
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
        onClick={e => formHandler(e, groupInput)}
      >Join Group</button>
      <button
        name='create'
        onClick={e => formHandler(e, groupInput)}
      >Create Group</button>
    </form>
  )
}

export default GroupForm
