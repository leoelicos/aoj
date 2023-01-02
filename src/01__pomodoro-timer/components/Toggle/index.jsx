import styles from './style/Toggle.module.css'
import { ReactComponent as Gear } from './images/gear.svg'
import { ReactComponent as Check } from './images/check.svg'

const Toggle = ({ handleClickGear, disabled, minutes, seconds, edit }) => {
  return (
    <button
      className={styles.toggle}
      onClick={handleClickGear}
      disabled={disabled}>
      <div className={styles.alarm}>{`${minutes}:${seconds.toString().padStart(2, '0')}`}</div>
      {edit ? <Check /> : <Gear />}
    </button>
  )
}
export default Toggle
