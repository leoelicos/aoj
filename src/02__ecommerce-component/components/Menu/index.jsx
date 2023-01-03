import { useContext } from 'react'
import { MenuContext } from '../../contexts/MenuContext'
import MenuItem from '../MenuItem'
import styles from '../../style/styles.module.css'

function Menu() {
  const menu = useContext(MenuContext)
  return (
    <div className={styles.panel}>
      <h1>To Go Menu</h1>
      <ul className={styles.menu}>
        {menu.map((m) => (
          <MenuItem
            key={m.name}
            {...m}
          />
        ))}
      </ul>
    </div>
  )
}
export default Menu
