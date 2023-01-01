import './style/timer.css'

import { useRef, useState } from 'react'
import ClockNumber from './components/ClockNumber'
import Control from './components/Control'
import Ring from './components/Ring'
import Toggle from './components/Toggle'

export default function PomodoroTimer() {
  const [started, setStarted] = useState(false)
  const [saved, setSaved] = useState({ minutes: 1, seconds: 0 })
  const [current, setCurrent] = useState(saved)
  const [edit, setEdit] = useState(false)
  const timerRef = useRef(null)
  const mp3 = useRef(new Audio('./audio/alarm.mp3'))

  const handleClickStart = () => {
    clearInterval(timerRef.current)
    setCurrent(saved)
    setStarted(true)
    timerRef.current = setInterval(() => {
      setCurrent((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        else if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 }
        else {
          clearInterval(timerRef.current)
          setStarted(false)
          mp3.current.play()
          alert('Alarm finished')
          return prev
        }
      })
    }, 1000)
  }

  const handleClickStop = () => {
    clearInterval(timerRef.current)
    setStarted(false)
  }

  const handleClickGear = () => {
    if (edit) setCurrent(saved)
    setEdit((edit) => !edit)
  }

  const setSavedMinutes = (e) => setSaved({ ...saved, minutes: e.target.value })
  const setSavedSeconds = (e) => setSaved({ ...saved, seconds: e.target.value })
  const setCurrentMinutes = (e) => setCurrent({ ...current, minutes: e.target.value })
  const setCurrentSeconds = (e) => setCurrent({ ...current, seconds: e.target.value })

  const circleWidth = 1600
  const offset = (circleWidth * (current.minutes * 60 + current.seconds)) / (saved.minutes * 60 + saved.seconds) + 'px'

  return (
    <div className='wrapper'>
      <div className={started ? 'ring ' : 'ring ending'}>
        <Ring
          strokeDasharray={`${circleWidth}px`}
          strokeDashoffset={offset}
        />
      </div>

      <div className='timer'>
        <div className='time'>
          {edit ? (
            <ClockNumber
              {...saved}
              setMinutes={setSavedMinutes}
              setSeconds={setSavedSeconds}
            />
          ) : (
            <ClockNumber
              {...current}
              setMinutes={setCurrentMinutes}
              setSeconds={setCurrentSeconds}
              disabled={true}
            />
          )}
        </div>
        <Control
          cb={started ? handleClickStop : handleClickStart}
          disabled={edit}
          msg={edit ? '.' : started ? 'STOP' : `START`}
        />
        <Toggle
          handleClickGear={handleClickGear}
          disabled={started}
          minutes={saved.minutes}
          seconds={saved.seconds}
          edit={edit}
        />
      </div>
    </div>
  )
}
