import { useEffect, useState } from 'react'

// data
import keys from './data/keys'
import codes from './data/codes'

// components
import Button from './components/Button'

// styles
import styles from './style/styles.module.css'

const Body = ({ children }) => <div className={styles.body}>{children}</div>
const Keyboard = ({ children }) => <div className={styles.keyboard}>{children}</div>
const Row = ({ children }) => <div className={styles.row}>{children}</div>

export default function ComputerKeyboard() {
  const getRandomCode = () => codes[Math.floor(Math.random() * codes.length)]

  const [jiggle, setJiggle] = useState(getRandomCode())
  const [pressedKey, setPressedKey] = useState(null)
  const handleKeyDown = (e) => {
    setPressedKey(e.code)
  }

  useEffect(() => {
    if (pressedKey === jiggle) setJiggle(getRandomCode())
  }, [pressedKey, jiggle, setJiggle])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <Body>
      <Keyboard>
        <h1>Eyes on the Screen</h1>
        {keys.map((row, i) => (
          <Row
            key={i}
            row={row}>
            {row.map(({ code, key }) => (
              <Button
                key={code}
                name={key}
                code={code}
                isJiggle={code === jiggle}
              />
            ))}
          </Row>
        ))}
      </Keyboard>
    </Body>
  )
}
