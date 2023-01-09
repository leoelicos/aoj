import { useEffect, useRef, useState } from 'react'
import './style/styles.css'
export default function VerificationCode() {
  const [code, setCode] = useState(['', '', '', ''])
  const [active, setActive] = useState(0)
  const secret = '1234'
  const handleVerify = (e) => {
    e.preventDefault()
    secret === code.join('') ? window.alert('Correct') : window.alert('Incorrect')
  }

  const digits = useRef(null)
  const isPasting = useRef(false)

  const handlePaste = (e, idx) => {
    isPasting.current = true
    const str = e.clipboardData.getData('text')
    setCode((prev) => prev.map((v, i) => (i >= idx && i <= idx + str.length - 1 ? str[i - idx] : v)))
    setActive(Math.min(3, idx + str.length - 1))
  }

  const handleChange = (e, i) => {
    let char = e.target.value
    if (!char.match(/\w/)) {
      setCode((prev) => prev.map((v, idx) => (idx === i ? '' : v)))
      setActive(i)
    } else {
      setCode((prev) => prev.map((v, idx) => (idx === i ? char : v)))
      setActive(Math.min(3, i + 1))
    }
  }

  const pasteRef = useRef(false)

  useEffect(() => {
    let el = digits.current.children[active]
    el.focus()
    el.select()
  }, [active])

  return (
    <div className='aoj-10'>
      <div className='body'>
        <div className='wrapper'>
          <h1>Authorization Code</h1>
          <p>Please enter the code that we sent to (***) *** - 2819.</p>
          <form action=''>
            <div
              className='fields'
              ref={digits}>
              {code.map((digit, i) => (
                <input
                  key={i}
                  type='text'
                  maxLength='1'
                  value={digit}
                  onChange={(e) => {
                    if (pasteRef.current) {
                      pasteRef.current = false
                      return
                    }
                    handleChange(e, i)
                  }}
                  onPaste={(e) => {
                    pasteRef.current = true
                    handlePaste(e, i)
                  }}
                  onClick={(e) => {
                    setActive(i)
                  }}
                />
              ))}
            </div>
            <button onClick={handleVerify}>Verify</button>
          </form>
        </div>
      </div>
    </div>
  )
}
