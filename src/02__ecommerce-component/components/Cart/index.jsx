import { useContext } from 'react'

import { MenuContext } from '../../contexts/MenuContext'
import { CartContext } from '../../contexts/CartContext'

import CartItem from '../CartItem'

import { formatPrice } from '../../utils'

import styles from '../../style/styles.module.css'

function Cart() {
  const menu = useContext(MenuContext)
  const cart = useContext(CartContext)

  const priceSubtotal = menu
    .filter((m) => cart.includes(m.name))
    .reduce((a, b) => {
      if (b.count > 0) return a + b.count * b.price
      else return a
    }, 0)
  const tax = 0.0975
  const priceTax = priceSubtotal * tax
  const priceTotal = priceSubtotal + priceTax
  return (
    <div className={`${styles.panel} ${styles.cart}`}>
      <h1>Your Cart{cart.length === 0 && ' Is Empty'}</h1>
      <ul className={styles['cart-summary']}>
        {cart.map((name) => {
          let m = menu.find((menuItem) => menuItem.name === name)
          return (
            <CartItem
              key={m.name}
              {...m}
            />
          )
        })}
      </ul>

      <div className={styles.totals}>
        <div className={styles['line-item']}>
          <div className={styles.label}>Subtotal:</div>
          <div className={`${styles.amount} ${styles.price} ${styles.subtotal}`}>{formatPrice(priceSubtotal)}</div>
        </div>
        <div className={styles['line-item']}>
          <div className={styles.label}>Tax:</div>
          <div className={`${styles.amount} ${styles.price} ${styles.tax}`}>{formatPrice(priceTax)}</div>
        </div>
        <div className={`${styles['line-item']} ${styles.total}`}>
          <div className={styles.label}>Total:</div>
          <div className={`${styles.amount} ${styles.price} ${styles.total}`}>{formatPrice(priceTotal)}</div>
        </div>
      </div>
    </div>
  )
}
export default Cart
