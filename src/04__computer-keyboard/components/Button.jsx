import styles from '../style/styles.module.css'

export default function Button({ name, code, isJiggle }) {
  let style = styles.key
  let utilityStyle = ' ' + styles.utility
  let jiggleStyle = ' ' + styles.jiggle
  const utilities = ['Tab', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight']
  if (utilities.includes(code)) style += utilityStyle
  if (isJiggle) style += jiggleStyle
  return <button className={style}>{name}</button>
}
