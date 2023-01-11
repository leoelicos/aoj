import './style/styles.css'
import { ReactComponent as Close } from './images/close.svg'
// import { ReactComponent as Desk } from './images/desk.svg'
import KeylightImage from './images/elgato-key-light.png'
import BackgroundImage from './images/bg.jpg'
import { useState } from 'react'

export default function CustomModal() {
  const [hidden, setHidden] = useState(true)

  const toggleModal = () => {
    setHidden((prev) => !prev)
  }

  return (
    <div className='aoj-13'>
      <div className='body'>
        <div className='wrapper'>
          <svg
            viewBox='0 0 1440 1024'
            fill='none'>
            <image
              href={BackgroundImage}
              width='1440'
              height='1024'
            />
            <a
              href='#'
              onClick={toggleModal}>
              <circle
                className='dot'
                cx='136.5'
                cy='113.5'
                r='17.5'
                id='elgato-keylight'
              />
              <circle
                id='my-circle'
                cx='136.5'
                cy='113.5'
                r='22'
                stroke='#F41E82'
                strokeWidth='6px'
                opacity='0'
              />
            </a>
            <circle
              cx='164.5'
              cy='310.5'
              r='17.5'
              fill='F00000'
            />
            <circle
              cx='210.5'
              cy='471.5'
              r='17.5'
              fill='#F00000'
            />
            <circle
              cx='413.5'
              cy='464.5'
              r='17.5'
              fill='#F00000'
            />
            <circle
              cx='885.5'
              cy='364.5'
              r='17.5'
              fill='#F00000'
            />
            <circle
              cx='745.5'
              cy='331'
              r='17.5'
              fill='#F00000'
            />
            <circle
              cx='1314.5'
              cy='484.5'
              r='17.5'
              fill='#F00000'
            />
            <circle
              cx='480.5'
              cy='968.5'
              r='17.5'
              fill='#F00000'
            />
            <circle
              cx='584.5'
              cy='829.5'
              r='17.5'
              fill='#F00000'
            />
            <circle
              cx='864.5'
              cy='962.5'
              r='17.5'
              fill='#F00000'
            />
            <circle
              cx='843.5'
              cy='789.5'
              r='17.5'
              fill='#F00000'
            />
            <circle
              cx='1139.5'
              cy='822.5'
              r='17.5'
              fill='#F00000'
            />
            <circle
              cx='1123.5'
              cy='954.5'
              r='17.5'
              fill='#F00000'
            />
            <circle
              cx='1186.5'
              cy='759.5'
              r='17.5'
              fill='#F00000'
            />
            <circle
              cx='1056.5'
              cy='863.5'
              r='17.5'
              fill='#F00000'
            />
            <circle
              cx='426.5'
              cy='795.5'
              r='17.5'
              fill='#F00000'
            />
            <circle
              cx='645.5'
              cy='752.5'
              r='17.5'
              fill='#F00000'
            />
            <circle
              cx='54.5'
              cy='491.5'
              r='17.5'
              fill='#F00000'
            />
          </svg>

          <div className={`overlay ${hidden ? 'hidden' : ''}`}>
            <div className='modal'>
              <button
                className='close'
                onClick={toggleModal}>
                <Close />
              </button>

              <div className='content'>
                <h1>Elgato Key Lights</h1>
                <div className='description'>
                  <p>These lights are great if you shoot video at your desk.</p>
                  <p>My desk is pushed up against the wall, so I didn't have room for a large soft box. These lights still deliver on the look that I wanted. Plus, it comes with a desktop app where you can adjust the brightness and temperature.</p>
                </div>
                <a
                  href='http://amazon.com'
                  className='buy-now'
                  target='_blank'>
                  BUY NOW for $169.99
                </a>
              </div>

              <div className='product-image'>
                <img
                  src={KeylightImage}
                  alt='Elgato Key Light'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
