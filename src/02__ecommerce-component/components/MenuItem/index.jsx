import { useContext } from 'react'
import { formatPrice } from '../../utils'

import { MenuDispatchContext } from '../../contexts/MenuContext'
import { CartDispatchContext } from '../../contexts/CartContext'
import { CartContext } from '../../contexts/CartContext'

import styles from '../../style/styles.module.css'

function MenuItem({ name, price, image, alt }) {
  const dispatchMenu = useContext(MenuDispatchContext)
  const dispatchCart = useContext(CartDispatchContext)
  const cart = useContext(CartContext)

  const handleClickAdd = () => {
    dispatchCart({
      type: 'addedToCart',
      name: name
    })
    dispatchMenu({
      type: 'addedFromMenu',
      name: name
    })
  }
  return (
    <li>
      <div className={styles.plate}>
        <img
          src={image}
          alt={alt}
          className={styles.plate}
        />
      </div>
      <div className={styles.content}>
        <p className={styles['menu-item']}>{name}</p>
        <p className={styles.price}>{formatPrice(price)}</p>
        {cart.includes(name) ? (
          <button
            className={styles['in-cart']}
            disabled>
            <img
              src='/images/02__ecommerce-component/check.svg'
              alt='check'
            />
            In Cart
          </button>
        ) : (
          <button
            className={styles.add}
            onClick={handleClickAdd}>
            Add to Cart
          </button>
        )}
      </div>
    </li>
  )
}
export default MenuItem
