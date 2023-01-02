import styles from './style/toc.module.css'
import apps from './data/apps.json'
import { Link } from 'react-router-dom'

const { list } = apps

function Toc() {
  return (
    <div className={styles.body}>
      <section className={styles['link-container']}>
        {list.map(({ name, link }) => (
          <Link
            key={name}
            to={link}
            className={styles.link}>
            {name.replace(' ', '\n')}
          </Link>
        ))}
      </section>
    </div>
  )
}

export default Toc
