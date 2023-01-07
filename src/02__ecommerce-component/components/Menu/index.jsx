import { useContext } from 'react'
import { MenuContext } from '../../contexts/MenuContext'
import MenuItem from '../MenuItem'
import '../../style/styles.css'

function Menu() {
  const menu = useContext(MenuContext)
  return (
    <div className='panel'>
      <h1>To Go Menu</h1>
      <ul className='menu'>
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
