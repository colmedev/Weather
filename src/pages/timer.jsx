import { useState, useEffect, useRef } from 'react'
import Btn from '../components/btn'
function Timer () {
  const [time, setTime] = useState(false)
  const [running, offRunning] = useState(0)
  const intervalId = useRef(null)
  const startTimer = useRef(0)

  useEffect(() => {
    if (time) {
      intervalId.current = setInterval(() => {
        offRunning(Date.now() - startTimer.current)
      }, 10)
    }

    return () => {
      clearInterval(intervalId.current)
    }
  }, [time])

  function start () {
    setTime(true)
    startTimer.current = Date.now() - running
  }

  function stop () {
    setTime(false)
  }

  function restart () {
    offRunning(0)
    setTime(false)
  }

  function formatTime () {
    let hours = Math.floor(running / (1000 * 60 * 60))
    let minutes = Math.floor(running / (1000 * 60) % 60)
    let seconds = Math.floor(running / (1000) % 60)
    let milliseconds = Math.floor(running % 1000 / 10)

    hours = String(hours).padStart(2, '0')
    minutes = String(minutes).padStart(2, '0')
    seconds = String(seconds).padStart(2, '0')
    milliseconds = String(milliseconds).padStart(2, '0')

    return `${hours}:${minutes}:${seconds}:${milliseconds}`
  }

  return (
    <div>
      <h1>Timer</h1>
      <p>{formatTime()}</p>
      <Btn
      click={start}
      text="Start" />

      <Btn
      click={restart}
      text="Reset" />

      <Btn
      click={stop}
      text='Stop' />
    </div>
  )
}
export default Timer
