import { useEffect, useState } from 'react'
import { ReactComponent as Copy } from './images/copy.svg'

import './style/styles.css'

export default function PasswordGenerator() {
  const [copied, setCopied] = useState(false)
  const [length, setLength] = useState(12)
  const [password, setPassword] = useState('')
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeSimilar, setIncludeSimilar] = useState(true) //(i, l, 1, L, o, 0, O)
  const handleChangeLength = (e) => {
    setLength(e.target.value)
  }
  const handleChangeIncludeSymbols = (e) => {
    setIncludeSymbols(e.target.checked)
  }
  const handleChangeIncludeNumbers = (e) => {
    setIncludeNumbers(e.target.checked)
  }
  const handleChangeIncludeLowercase = (e) => {
    setIncludeLowercase(e.target.checked)
  }
  const handleChangeIncludeUppercase = (e) => {
    setIncludeUppercase(e.target.checked)
  }
  const handleChangeIncludeSimilar = (e) => {
    setIncludeSimilar(e.target.checked)
  }

  const generatePassword = () => {
    let pool = []
    if (includeSymbols) pool = pool.concat('@#$%'.split(''))
    if (includeNumbers) pool = pool.concat('0123456789'.split(''))
    if (includeLowercase) pool = pool.concat('abcdefghijklmnopqrstuvwxyz'.split(''))
    if (includeUppercase) pool = pool.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''))
    if (!includeSimilar) pool = pool.filter((v) => !['i', 'l', '1', 'L', 'o', '0', 'O'].includes(v))

    setPassword(
      new Array(+length)
        .fill(0)
        .map(() => pool[Math.floor(Math.random() * pool.length)])
        .join('')
    )
  }

  useEffect(() => {
    generatePassword()
  }, [])

  return (
    <div className='aoj-18'>
      <div className='body'>
        <div className='wrapper'>
          <div className='field'>
            <input
              type='text'
              name='password'
              id='password'
              value={password}
              min='6'
              max='32'
              steps='1'
              readOnly
              onClick={async () => {
                await navigator.clipboard.writeText(password)
                setCopied(true)
                setTimeout(() => {
                  setCopied(false)
                }, 2000)
              }}
            />

            <button
              className={`copy ${copied ? 'copied' : ''}`}
              onClick={async () => {
                await navigator.clipboard.writeText(password)
                setCopied(true)
                setTimeout(() => {
                  setCopied(false)
                }, 2000)
              }}>
              <Copy />
              <span>Copied!</span>
            </button>
          </div>

          <div className='field'>
            <input
              type='range'
              name='length'
              id='length'
              value={length}
              min='6'
              max='32'
              onChange={(e) => {
                handleChangeLength(e)
                generatePassword()
              }}
            />
            <span id='lengthText'>{length}</span>&nbsp;characters
          </div>

          <div className='field'>
            <input
              type='checkbox'
              name='symbols'
              id='symbols'
              checked={includeSymbols}
              onChange={(e) => {
                handleChangeIncludeSymbols(e)
                generatePassword()
              }}
            />
            <label htmlFor='symbols'>
              <strong>Include Symbols</strong> (@#$%)
            </label>
          </div>

          <div className='field'>
            <input
              type='checkbox'
              name='numbers'
              id='numbers'
              checked={includeNumbers}
              onChange={(e) => {
                handleChangeIncludeNumbers(e)
                generatePassword()
              }}
            />
            <label htmlFor='numbers'>
              <strong>Include Numbers</strong> (1234)
            </label>
          </div>

          <div className='field'>
            <input
              type='checkbox'
              name='lowercase'
              id='lowercase'
              checked={includeLowercase}
              onChange={(e) => {
                handleChangeIncludeLowercase(e)
                generatePassword()
              }}
            />
            <label htmlFor='lowercase'>
              <strong>Include Lowercase Characters</strong> (abcd)
            </label>
          </div>

          <div className='field'>
            <input
              type='checkbox'
              name='uppercase'
              id='uppercase'
              checked={includeUppercase}
              onChange={(e) => {
                handleChangeIncludeUppercase(e)
                generatePassword()
              }}
            />
            <label htmlFor='uppercase'>
              <strong>Include Uppercase Characters</strong> (ABCD)
            </label>
          </div>

          <div className='field'>
            <input
              type='checkbox'
              name='similar'
              id='similar'
              checked={includeSimilar}
              onChange={(e) => {
                handleChangeIncludeSimilar(e)
                generatePassword()
              }}
            />
            <label htmlFor='similar'>
              <strong>Include Similar Characters</strong> (i, l, 1, L, o, 0, O)
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
