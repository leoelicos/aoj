import { useRef, useState } from 'react'
import data from './data/data'
import cover from './images/podcast-cover.png'
import './style/styles.css'

export default function EpisodeListing() {
  const [last, setLast] = useState(null)
  const [checked, setChecked] = useState(data.map(() => false))
  const [played, setPlayed] = useState(checked)
  const listEl = useRef(null)

  const highlightMany = (startIndex, endIndex) => {
    const a = Math.min(startIndex, endIndex)
    const b = Math.max(startIndex, endIndex)
    const res = checked[startIndex]
    setChecked(() => checked.map((v, idx) => (idx >= a && idx <= b ? res : v)))
  }

  const highlightOne = (index) => {
    const res = setChecked(() => checked.map((v, i) => (i === index ? !v : v)))
  }

  const handleClick = (e, i) => {
    if (e.shiftKey === true) {
      highlightMany(last, i)
    } else {
      setLast(i)
      highlightOne(i)
    }
  }

  const handleClickMarkPlayed = () => {
    setPlayed(played.map((v, i) => (checked[i] ? true : v)))
    setChecked(checked.map(() => false))
  }

  const handleClickMarkUnplayed = () => {
    setPlayed(played.map((v, i) => (checked[i] ? false : v)))
    setChecked(checked.map(() => false))
  }

  return (
    <div className='aoj-5'>
      <div className='body'>
        <div className='cover'>
          <img
            src={cover}
            alt='Compressed.fm'
          />
        </div>
        <div className='content'>
          <h1>Listen to all the Compressed.fm Episodes</h1>
          <ul ref={listEl}>
            {data.map(({ title }, i) => (
              <li key={`episode-${i + 1}`}>
                <label htmlFor={`episode-${i + 1}`}>
                  <input
                    type='checkbox'
                    checked={checked[i]}
                    value={checked[i]}
                    name={`episode-${i + 1}`}
                    id={`episode-${i + 1}`}
                    onChange={() => {
                      setChecked(checked.map((v, idx) => (idx === i ? !v : v)))
                    }}
                    disabled
                  />
                  <span
                    className={played[i] ? 'played' : ''}
                    style={{ userSelect: 'none', MozUserSelect: 'none' }}
                    onClick={(e) => {
                      handleClick(e, i)
                    }}
                    title={title}>
                    {i + 1} || {title}
                  </span>
                </label>
              </li>
            ))}
          </ul>

          <button onClick={handleClickMarkPlayed}>Mark as Played</button>
          <button onClick={handleClickMarkUnplayed}>Mark as Unplayed</button>
        </div>
      </div>
    </div>
  )
}
