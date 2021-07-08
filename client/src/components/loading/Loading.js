import { useEffect } from 'react'

function Loading({ setLoading }) {

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])
  return (
    <div className='loading-page'>
      <div className='site-name'>
        <p className='trivia'>Trivia</p>
        <p className='bite'>Bite</p>
        <div className='login-icon'/>
      </div>
      <div className='loading-gradient' />
      <div className='loading'>&#128161;</div>
    </div>
  )
}

export default Loading
