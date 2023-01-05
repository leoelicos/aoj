import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import keys from './data/keys'
function Button({ name, code, isJiggle }) {
  let style = styles.key
  if (['Tab', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight'].includes(code)) style += ' ' + styles.utility
  if (isJiggle) {
    style += ' ' + styles.jiggle
    console.log('isJiggle = ', code)
  }
  return <button className={style}>{name}</button>
}

export default function ComputerKeyboard() {
  const codes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight']
  const getRandomCode = () => codes[Math.floor(Math.random() * codes.length)]

  const [jiggle, setJiggle] = useState(getRandomCode())
  const [pressedKey, setPressedKey] = useState(null)
  const handleKeyDown = (e) => {
    setPressedKey((prev) => e.code)
  }

  useEffect(() => {
    if (pressedKey === jiggle) {
      setJiggle((prev) => getRandomCode())
    }
  }, [pressedKey, jiggle, setJiggle])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className={styles.body}>
      <div className={styles.keyboard}>
        <h1>Eyes on the Screen</h1>
        {keys.map((row, i) => (
          <div
            key={i}
            className={styles.row}>
            {row.map(({ code, key }) => (
              <Button
                key={code}
                name={key}
                code={code}
                isJiggle={code === jiggle}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
