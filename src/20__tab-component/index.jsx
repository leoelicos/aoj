import { useState } from 'react'
import episodes from './data/app'
import { ReactComponent as Logo } from './images/logo.svg'
import './style/styles.css'

export default function TabComponent() {
  const [selected, setSelected] = useState(episodes[0])

  return (
    <div className='aoj-20'>
      <div className='body'>
        <div className='wrapper'>
          <aside>
            <a
              href='http://compressed.fm'
              target='_blank'>
              <Logo />
            </a>
            <ul id='tabs'>
              {episodes.map((episode) => (
                <li
                  key={episode.title}
                  className={episode.id === selected.id ? 'selected' : ''}>
                  <button
                    onClick={() => {
                      setSelected(episodes.find((e) => episode.id === e.id))
                    }}>
                    <div className='episode'>Episode {episode.id}</div>
                    <div className='title'>{episode.title}</div>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <main>
            <div className='cover'>
              <img
                src={selected.cover}
                alt={`Episode ${selected.id}`}
              />
            </div>
            <div className='content'>
              <h1>{selected.title}</h1>
              <p>{selected.description}</p>
              <a
                href={selected.link}
                className='more'>
                More
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
