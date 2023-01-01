import './starter-files/styles.css'
import { ReactComponent as Gear } from './starter-files/images/gear.svg'
import { ReactComponent as Ring } from './ring.svg'
import { ReactComponent as Check } from './starter-files/images/check.svg'
import { useRef, useState, useEffect } from 'react'

function ClockNumber({ value, cb = null, disabled = false }) {
  return (
    <div className='currentMinutes'>
      <input
        type='text'
        value={value}
        onChange={cb}
        disabled={disabled}
      />
    </div>
  )
}

function Control({ cb, msg, disabled }) {
  return (
    <button
      className='start'
      onClick={cb}
      disabled={disabled}>
      {msg}
    </button>
  )
}

const PomodoroTimer = () => {
  const [started, setStarted] = useState(false)
  const [saved, setSaved] = useState({ minutes: 0, seconds: 1 })
  const [current, setCurrent] = useState(saved)
  const [edit, setEdit] = useState(false)
  const timerRef = useRef(null)

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
    setEdit(!edit)
    if (edit) setCurrent(saved)
  }

  return (
    <div className='wrapper'>
      <div className={started ? 'ring' : 'ring ending'}>
        <Ring />
      </div>

      <div className='timer'>
        {edit ? (
          <div className='time'>
            <ClockNumber
              value={saved.minutes}
              cb={(e) => {
                setSaved({ ...saved, minutes: e.target.value })
              }}
            />
            <div className='colon'>:</div>
            <ClockNumber
              value={saved.seconds.toString().padStart(2, '0')}
              cb={(e) => {
                setSaved({ ...saved, seconds: e.target.value })
              }}
            />
          </div>
        ) : (
          <div className='time'>
            <ClockNumber
              value={current.minutes}
              disabled={true}
            />
            <div className='colon'>:</div>
            <ClockNumber
              value={current.seconds.toString().padStart(2, '0')}
              disabled={true}
            />
          </div>
        )}
        <Control
          cb={started ? handleClickStop : handleClickStart}
          disabled={edit}
          msg={edit ? '.' : started ? 'STOP' : `START`}
        />
        <button
          className='settings'
          onClick={handleClickGear}
          disabled={started}>
          <div className='alarm'>{`${saved.minutes}:${saved.seconds.toString().padStart(2, '0')}`}</div>
          {edit ? (
            <Check />
          ) : (
            <>
              <Gear />
            </>
          )}
        </button>
      </div>
    </div>
  )
}
export default PomodoroTimer
