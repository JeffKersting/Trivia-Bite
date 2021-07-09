import { useState, useEffect } from 'react'

function Timer({ calculateScore }) {
  let [timer, setTimer] = useState(90)
  let time = 90

  /*
    Recursive function counts down initial time given, with a conditional check
    to end the quiz when time runs out
  */
  const updateTimer = () => {
    time -= 1
    setTimer(time)
    if (time === 0) {
      calculateScore(1)
    } else {
      setTimeout(() => updateTimer(), 1000)
    }
  }

  /*
    Use effect initally calls recursive updateTimer function,
    and calls calculateScore (Quiz.js) on component unmount.
  */
  useEffect(() => {
    updateTimer()
    return () => calculateScore(time)
  }, [])

  return (
    <>
      <div className='timer-container'>
        <div className='timer' style={{
          width: `${timer/90 * 100}%`
        }}/>
      </div>
    </>
  )
}

export default Timer
