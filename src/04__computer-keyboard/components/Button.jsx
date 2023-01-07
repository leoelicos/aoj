import '../style/styles.css'

export default function Button({ name, code, isJiggle }) {
  let style = 'key'
  const utilities = ['Tab', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight']
  if (utilities.includes(code)) style += ' utility'
  if (isJiggle) style += ' jiggle'
  return <button className={style}>{name}</button>
}
