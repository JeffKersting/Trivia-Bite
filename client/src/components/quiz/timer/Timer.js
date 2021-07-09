import { useState, useEffect } from 'react'

function Timer({ calculateScore }) {
  let [timer, setTimer] = useState(90)
  let time = 90

  const updateTimer = () => {
    time -= 1
    setTimer(time)
    if (time === 0) {
      calculateScore(1)
    } else {
      setTimeout(() => updateTimer(), 1000)
    }
  }

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
