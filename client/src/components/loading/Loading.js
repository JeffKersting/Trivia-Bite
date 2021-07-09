import { useEffect } from 'react'

function Loading({ setLoading }) {
  /*
    Component automatically unmounts itself after 1 second, allowing for easier
    renders by updating the loading state (App.js) 
  */
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
