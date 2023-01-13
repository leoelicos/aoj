import { useState, useRef, useEffect } from 'react'
import './style/styles.css'
import titles from './data/titles'
import Article from './components/Article'

export default function SidebarHighlight() {
  const sidebarList = useRef(null)
  const headings = useRef(null)
  const [headingOffsets, setHeadingOffsets] = useState(null)
  const [currentView, setCurrentView] = useState(0)

  const mainEl = document.querySelector('main')

  const updateSidebar = (e) => {
    for (let i = headingOffsets.length - 1; i >= 0; i--) {
      if (mainEl.scrollTop >= headingOffsets[i]) {
        setCurrentView(i)
        break
      }
    }
  }

  useEffect(() => {
    headings.current = [...document.querySelectorAll('h3')]

    setHeadingOffsets(headings.current.map((heading) => heading.offsetTop))
  }, [])

  const handleClick = (e, i) => {
    e.preventDefault()
    headings.current[i].scrollIntoView()
    setCurrentView(i)
  }

  return (
    <div className='aoj-17'>
      <div className='body'>
        <div className='content'>
          <aside>
            <div>
              <div className='table-of-contents'>Table of Contents</div>
              <ul ref={sidebarList}>
                {titles.map((title, i) => (
                  <li
                    key={title}
                    className={i === currentView ? 'selected' : ''}>
                    <button onClick={(e) => handleClick(e, i)}>{title}</button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <main onScroll={updateSidebar}>
            <Article />
          </main>
        </div>
      </div>
    </div>
  )
}
