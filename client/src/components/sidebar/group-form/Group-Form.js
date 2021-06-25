import { useState } from 'react'

function GroupForm() {
  const [groupInput, setInput] = useState('')

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
