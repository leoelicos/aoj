import './style/clock.css'
export default function ClockNumber({ minutes, seconds, setMinutes, setSeconds, disabled = false }) {
  return (
    <div className='time'>
      <div>
        <input
          type='text'
          value={minutes}
          onChange={setMinutes}
          disabled={disabled}
        />
      </div>
      :
      <div>
        <input
          type='text'
          value={seconds.toString().padStart(2, '0')}
          onChange={setSeconds}
          disabled={disabled}
        />
      </div>
    </div>
  )
}
