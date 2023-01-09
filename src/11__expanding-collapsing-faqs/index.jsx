import './style/styles.css'
import { ReactComponent as Picture1 } from './images/question-1.svg'
import { ReactComponent as Picture2 } from './images/question-2.svg'
import { useState } from 'react'

export default function FAQs() {
  const [expanded0, setExpanded0] = useState(false)
  const [expanded1, setExpanded1] = useState(false)

  return (
    <div className='aoj-11'>
      <div className='body'>
        <div className='wrapper'>
          <ul>
            <li
              className={expanded0 ? 'expand' : ''}
              onClick={() => {
                setExpanded0((prev) => !prev)
              }}>
              <div className='anchor'>
                <div className='question'>
                  <div className='question-mark'>
                    <Picture1 />
                  </div>
                  <div className='content'>Technically, Svelte is a library and SvelteKit is a framework. What's the difference?</div>
                </div>
              </div>
              <div className='answer'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>

                <p>Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </li>

            <li
              className={expanded1 ? 'expand' : ''}
              onClick={() => {
                setExpanded1((prev) => !prev)
              }}>
              <div className='anchor'>
                <div className='question'>
                  <div className='question-mark'>
                    <Picture2 />
                  </div>
                  <div className='content'>Do you provide a certificate of completion?</div>
                </div>
              </div>
              <div className='answer'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>

                <p>Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
