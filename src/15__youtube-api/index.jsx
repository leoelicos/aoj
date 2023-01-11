import './style/styles.css'

import Placeholder from './images/placeholder.png'
import Logo from './images/logo.png'

import data from './data/sampleData.js'

export default function YoutubeAPI() {
  const {
    id: { videoId: featureSrc },
    snippet: { title: featureTitle, description: featureDescription }
  } = data.items[0]

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
                src={`https://www.youtube.com/embed/${featureSrc}`}
                title='YouTube video player'
                style={{ border: 0 }}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen></iframe>
            </div>
            <h1>{featureTitle}</h1>
            <p>{featureDescription}</p>
          </div>

          <aside>
            <ul className='gallery'>
              {data.items.slice(1).map(
                ({
                  id: { videoId },
                  snippet: {
                    title,
                    thumbnails: {
                      default: { url: img }
                    }
                  }
                }) => (
                  <li key={title}>
                    <a
                      className='video'
                      href={`https://www.youtube.com/watch?v=${videoId}`}>
                      <img
                        src={img}
                        alt={title}
                      />
                      <h3>{title}</h3>
                    </a>
                  </li>
                )
              )}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  )
}
