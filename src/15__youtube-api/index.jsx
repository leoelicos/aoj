import './style/styles.css'

import Placeholder from './images/placeholder.png'
import Logo from './images/logo.png'

import data from './data/sampleData.js'
import { useState } from 'react'

export default function YoutubeAPI() {
  const [main, setMain] = useState(0)

  return (
    <div className='aoj-15'>
      <div className='body'>
        <div className='wrapper'>
          <header>
            <img
              src={Logo}
              alt='YouTube'
            />
          </header>

          <div className='feature'>
            <div className='embed'>
              <iframe
                width='100%'
                height='500'
                src={`https://www.youtube.com/embed/${data.items[main].id.videoId}`}
                title='YouTube video player'
                style={{ border: 0 }}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen></iframe>
            </div>
            <h1>{data.items[main].snippet.title}</h1>
            <p>{data.items[main].snippet.description}</p>
          </div>

          <aside>
            <ul className='gallery'>
              {data.items.map(({ snippet }, i) => (
                <li
                  key={snippet.title}
                  className={i === main ? 'selected' : ''}>
                  <button
                    className='video'
                    onClick={() => {
                      setMain(i)
                    }}
                    style={{ background: ` url(${snippet.thumbnails.default.url}) 100% 50% / cover no-repeat  ` }}>
                    <h3>{snippet.title}</h3>
                  </button>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  )
}
