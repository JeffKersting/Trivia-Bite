import { useState } from 'react'

function GroupForm({ formHandler }) {
  const [groupInput, setInput] = useState('')

  const inputHandler = (event) => {
    event.preventDefault()
    setInput(event.target.value)
  }

  return (
    <div className='group-form'>
      <div>Looks like you aren't in a group! Join a group by entering the group name below, or create one.</div>
      <form >
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
    </div>
  )
}

export default GroupForm
