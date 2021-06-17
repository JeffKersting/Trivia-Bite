import { useState, useEffect } from 'react'

function Timer({ calculateScore }) {
  let [timer, setTimer] = useState(120)
  let time = 120

  const updateTimer = () => {
    time -= 1
    setTimer(time)
    if (time === 0) {
      calculateScore(0)
    } else {
      setTimeout(() => updateTimer(), 1000)
    }
  }

  useEffect(() => {
    updateTimer()

    return () => calculateScore(time)
  }, [])

  return (
    <div>Time Left: {timer}</div>
  )
}

export default Timer
