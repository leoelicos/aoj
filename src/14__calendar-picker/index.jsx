import './style/styles.css'
import { ReactComponent as Next } from './images/next.svg'
import { ReactComponent as Previous } from './images/previous.svg'
import { useEffect, useRef, useState } from 'react'

function Month({ year, monthLong, handleNextMonth, handlePreviousMonth, mark, slots }) {
  return (
    <div className='wrapper'>
      <div className='previous'>
        <Previous onClick={handlePreviousMonth} />
      </div>
      <div className='month'>{`${monthLong} ${year}`}</div>
      <div className='next'>
        <Next onClick={handleNextMonth} />
      </div>
      {'SMTWTFS'.split('').map((c, i) => (
        <div
          className='day-of-week'
          key={i}>
          {c}
        </div>
      ))}
      {slots.map((node, i) => (
        <div
          key={i}
          className={mark && mark === i ? 'today' : ''}>
          {node}
        </div>
      ))}
    </div>
  )
}

export default function CalendarPicker() {
  let _d = useRef(new Date())

  let todaysDate = useRef(_d.current.getDate())
  let todaysMonth = useRef(_d.current.getMonth())
  let todaysYear = useRef(_d.current.getFullYear())

  const [yearMonth, setYearMonth] = useState({ year: todaysYear.current, month: todaysMonth.current })

  useEffect(() => {
    window.addEventListener('keydown', handleArrows)
  }, [])

  const handleNextMonth = () => {
    setYearMonth(({ year, month }) => ({ year: month === 11 ? year + 1 : year, month: month === 11 ? 0 : month + 1 }))
  }
  const handlePreviousMonth = () => {
    setYearMonth(({ year, month }) => ({ year: month === 0 ? year - 1 : year, month: month === 0 ? 11 : month - 1 }))
  }

  const handleArrows = ({ key }) => {
    if (key === 'ArrowLeft' || key === 'ArrowUp') handlePreviousMonth()
    else if (key === 'ArrowRight' || key === 'ArrowDown') handleNextMonth()
  }

  const daysInMonth = new Date(yearMonth.year, yearMonth.month + 1, 0).getDate()
  const d = new Date(yearMonth.year, yearMonth.month, 1)
  const firstDay = d.getDay()
  const monthLong = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(d)
  const daysInCalendar = 7 * Math.ceil((daysInMonth + firstDay) / 7)
  let dayCounter = 1
  let slots = Array(daysInCalendar)
    .fill(' ')
    .map((_, i) => (i < firstDay || i > daysInMonth + firstDay - 1 ? ' ' : dayCounter++))

  return (
    <div className='aoj-14'>
      <div className='body'>
        <Month
          year={yearMonth.year}
          month={yearMonth.month}
          handleNextMonth={handleNextMonth}
          handlePreviousMonth={handlePreviousMonth}
          today={_d.current}
          mark={todaysMonth.current === yearMonth.month && todaysYear.current === yearMonth.year ? todaysDate.current : null}
          monthLong={monthLong}
          slots={slots}
        />
      </div>
    </div>
  )
}
