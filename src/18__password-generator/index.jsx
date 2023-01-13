import { useState } from 'react'
import { ReactComponent as Copy } from './images/copy.svg'
export default function PasswordGenerator() {
  const [copied, setCopied] = useState(false)

  return (
    <div className='aoj-18'>
      <div className='body'>
        <div className='wrapper'>
          <div className='field'>
            <input
              type='text'
              name='password'
              id='password'
              value=''
              min='6'
              max='32'
              steps='1'
            />

            <button className={`copy ${copied ? 'copied' : ''}`}>
              <Copy />
              <span>Copied!</span>
            </button>
          </div>

          <div className='field'>
            <input
              type='range'
              name='length'
              id='length'
              value='12'
              min='6'
              max='32'
            />
            <span id='lengthText'>12</span> characters
          </div>

          <div className='field'>
            <input
              type='checkbox'
              name='symbols'
              id='symbols'
              value='true'
              checked='true'
            />
            <label for='symbols'>
              <strong>Include Symbols</strong> (@#$%)
            </label>
          </div>

          <div className='field'>
            <input
              type='checkbox'
              name='numbers'
              id='numbers'
              checked='true'
            />
            <label for='numbers'>
              <strong>Include Numbers</strong> (1234)
            </label>
          </div>

          <div className='field'>
            <input
              type='checkbox'
              name='lowercase'
              id='lowercase'
              checked='true'
            />
            <label for='lowercase'>
              <strong>Include Lowercase Characters</strong> (abcd)
            </label>
          </div>

          <div className='field'>
            <input
              type='checkbox'
              name='uppercase'
              id='uppercase'
              checked='true'
            />
            <label for='uppercase'>
              <strong>Include Uppercase Characters</strong> (ABCD)
            </label>
          </div>

          <div className='field'>
            <input
              type='checkbox'
              name='similar'
              id='similar'
              checked='true'
            />
            <label for='similar'>
              <strong>Include Similar Characters</strong> (i, l, 1, L, o, 0, O)
            </label>
          </div>
        </div>
        <script src='app.js'></script>
      </div>
    </div>
  )
}
