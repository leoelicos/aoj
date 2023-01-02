import styles from './style/control.module.css'

function Control({ cb, msg, disabled }) {
  return (
    <button
      className={styles.start}
      onClick={cb}
      disabled={disabled}>
      {msg}
    </button>
  )
}

export default Control
