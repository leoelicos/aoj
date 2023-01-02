import styles from './style/Ring.module.css'

const Ring = ({ strokeDasharray, strokeDashoffset, started }) => {
  return (
    <div className={started ? styles.ring : `${styles.ring} ${styles.ending}`}>
      <svg
        width='518'
        height='518'
        viewBox='0 0 518 518'>
        <circle
          strokeWidth='9px'
          x='0'
          y='y'
          cx='259'
          cy='259'
          r='254'
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
    </div>
  )
}
export default Ring
