import { useEffect, useRef, useState } from 'react'

import images from './images'

import './style/styles.css'

import { ReactComponent as Arrow } from './images/chevron.svg'

export default function ImageCarousel() {
  const [active, setActive] = useState(0)
  const thumbnails = useRef(document.getElementsByClassName('thumbnails'))

  useEffect(() => {
    let x = thumbnails.current.children[active]
    x.scrollIntoView({ inline: 'center' })
  }, [active])

  return (
    <div className='aoj-09'>
      <div className='body'>
        <div className='feature'>
          <img
            src={images[active].image}
            alt={images[active].caption}
          />
          <div className='caption'>Photo by Dave Hoefler Unsplash</div>
        </div>

        <div className='thumbnails'>
          <ul ref={thumbnails}>
            {images.map(({ image, caption }, i) => (
              <li
                className={i === active ? 'selected' : ''}
                key={image}
                onClick={() => {
                  setActive(i)
                }}>
                <a href='#'>
                  <img
                    src={image}
                    alt={caption}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <a
          href='#'
          className='left'
          onClick={() => {
            setActive(active === 0 ? images.length - 1 : active - 1)
          }}>
          <Arrow className='img' />
        </a>
        <a
          href='#'
          className='right'
          onClick={() => {
            setActive(active === images.length - 1 ? 0 : active + 1)
          }}>
          <Arrow className='img' />
        </a>
      </div>
    </div>
  )
}
