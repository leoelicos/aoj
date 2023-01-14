import { useEffect, useRef, useState } from 'react'
import { ReactComponent as Arrow } from './images/arrow.svg'
import { ReactComponent as Close } from './images/close.svg'

import './style/styles.css'

export default function Toaster() {
  const [collapsed, setCollapsed] = useState(true)

  const lastCollapse = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      if (lastCollapse.current === null) {
        console.log('Popup - 15 seconds after loading')
        lastCollapse.current = new Date().getTime()
        setCollapsed(false)
      }
    }, 15000)
  }, [])

  const handleMouseMove = (e) => {
    let posY = e.clientY
    let targetY = e.target.clientHeight
    let d = new Date().getTime()
    let difference = Math.floor((d - lastCollapse.current) / 1000)
    if (posY < targetY / 2) {
      if (lastCollapse.current === null) {
        console.log('Popup - moved first time')
        setCollapsed(false)
        lastCollapse.current = d
      } else if (difference >= 15) {
        console.log('Popup - 15 seconds since last popup')
        setCollapsed(false)
        lastCollapse.current = d
      }
    }
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className='aoj-23'>
      <div className='body'>
        <div className={`toaster ${collapsed ? 'collapsed' : ''}`}>
          <div className='close'>
            <button
              className='close-toaster'
              id='closeToaster'
              onClick={() => {
                setCollapsed(true)
              }}>
              <Close />
              &nbsp; Close
            </button>
          </div>
          <img
            src={require('./images/cover.jpg')}
            alt='Compressed.fm Cover'
            className='cover'
          />
          <h1>
            GET FREE
            <br />
            STUFF
            <br />
            IN YOUR INBOX
          </h1>
          <p>We try to include additional information and companion resources with each podcast episode. Sign up now to be included in the fun.</p>
          <form action=''>
            <div className='field'>
              <label htmlFor='email'>Email Address</label>
              <input
                type='email'
                name='email'
                id='email'
              />
            </div>
            <button
              className='submit'
              id='submit'>
              <Arrow />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
