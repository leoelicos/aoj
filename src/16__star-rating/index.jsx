import './style/styles.css'

import { ReactComponent as Star } from './images/star.svg'
import { useEffect, useRef, useState } from 'react'

export default function StarRating() {
  const [hover, setHover] = useState(0)
  const [saved, setSaved] = useState(0)
  const realSaved = useRef('hello')
  const handleMouseOut = () => {
    setHover(0)
    setSaved(realSaved.current)
  }
  const handleMouseOver = (i) => {
    setHover(i)
    setSaved(0)
  }
  const handleSave = (i) => {
    setSaved(i)
    realSaved.current = i
  }
  useEffect(() => {
    console.log('hover set to', hover)
  }, [hover])
  return (
    <div className='aoj-16'>
      <div className='body'>
        <div className='star-rating'>
          {[1, 2, 3, 4, 5].map((v) => (
            <a
              key={v}
              href='#'
              className={`star star-${v}`}>
              <Star
                className={`${v <= hover ? 'hover' : ''} ${v <= saved ? 'saved' : ''}`}
                onMouseOver={() => handleMouseOver(v)}
                onMouseOut={() => handleMouseOut()}
                onClick={() => handleSave(v)}
              />
            </a>
          ))}
        </div>
        <script src='app.js'></script>
      </div>
    </div>
  )
}
