import '../../style/timer.css'

function Control({ cb, msg, disabled }) {
  return (
    <button
      className={'start'}
      onClick={cb}
      disabled={disabled}>
      {msg}
    </button>
  )
}

export default Control
