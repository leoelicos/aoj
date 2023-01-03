import { useContext } from 'react'
import { formatPrice } from '../../utils'

import { MenuDispatchContext } from '../../contexts/MenuContext'
import { CartDispatchContext } from '../../contexts/CartContext'

import styles from '../../style/styles.module.css'
import cartItemStyles from './style/cartitem.module.css'

function CartItem({ name, price, image, alt, count }) {
  const dispatchMenu = useContext(MenuDispatchContext)
  const dispatchCart = useContext(CartDispatchContext)

  const handleDecrease = () => {
    dispatchMenu({
      type: 'decreased',
      name: name
    })
  }
  const handleIncrease = () => {
    dispatchMenu({
      type: 'increased',
      name: name
    })
  }

  const handleRemove = () => {
    dispatchCart({
      type: 'removedFromCart',
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
        <div className={styles.quantity}>1</div>
      </div>
      <div className={styles.content}>
        <p className={styles['menu-item']}>{name}</p>
        <p className={styles.price}>{formatPrice(price)}</p>
      </div>
      <div className={cartItemStyles['quantity__wrapper']}>
        {count === 0 ? (
          <button
            className={cartItemStyles.decrease}
            onClick={handleRemove}>
            ❌
          </button>
        ) : (
          <button
            className={cartItemStyles.decrease}
            onClick={handleDecrease}>
            <img
              src={'/images/02__ecommerce-component/chevron.svg'}
              alt='decrease'
            />
          </button>
        )}
        <div className={styles.quantity}>{count}</div>
        <button
          className={cartItemStyles.increase}
          onClick={handleIncrease}>
          <img
            src={'/images/02__ecommerce-component/chevron.svg'}
            alt='increase'
          />
        </button>
      </div>
      <div className={styles.subtotal}>{formatPrice(price * count)}</div>
    </li>
  )
}
export default CartItem
