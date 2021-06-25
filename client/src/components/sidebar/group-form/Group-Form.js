import { useState } from 'react'

function GroupForm() {
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
        onChange={event => inputHandler(event)}
      />
      <button>Join Group</button>
      <button>Create Group</button>
    </form>
  )
}

export default GroupForm
