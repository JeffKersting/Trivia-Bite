import { useState } from 'react'

function GroupForm() {
  const [groupInput, setInput] = useState('')

  const inputHandler = () => {
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
        onChange={inputHandler}
      />
    </form>
  )
}

export default GroupForm
