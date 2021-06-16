import { useState, useEffect } from 'react'

function Timer() {
  let [timer, setTimer] = useState(150)
  let time = 150

  const updateTimer = () => {
    time -= 1
    setTimer(time)
    if (time === 0) {
      return
    } else {
      setTimeout(() => updateTimer(), 1000)
    }
  }

  useEffect(() => {
    updateTimer()
  }, [])

  return (
    <div>Time Left: {timer}</div>
  )
}

export default Timer
