import { useState } from 'react'
import menuItems from './app'
import styles from './styles.module.css'

const formatPrice = (cents) => `$${Math.floor(cents / 100)}.${String(Math.floor(cents) % 100).padStart(2, '0')}`

function MenuItem({ name, price, image, alt, setData, cart, setCart }) {
  const handleClickAdd = () => {
    setCart((prev) => (prev.includes(name) ? prev : prev.concat(name)))
    setData((prev) => prev.map((item) => (item.name !== name ? item : { ...item, count: 1 })))
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

function Menu({ data, setData, cart, setCart }) {
  return (
    <div className={styles.panel}>
      <h1>To Go Menu</h1>
      <ul className={styles.menu}>
        {data.map((m) => (
          <MenuItem
            key={m.name}
            {...m}
            setData={setData}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </ul>
    </div>
  )
}

function CartItem({ name, price, image, alt, count, setData, setCart }) {
  const handleDecrease = () => {
    setData((prev) =>
      prev.map((item) =>
        item.name !== name
          ? item
          : {
              ...item,
              count: Math.max(item.count - 1, 0)
            }
      )
    )
  }
  const handleIncrease = () => {
    setData((prev) =>
      prev.map((item) =>
        item.name !== name
          ? item
          : {
              ...item,
              count: item.count + 1
            }
      )
    )
  }

  const handleRemove = () => {
    setCart((prev) => prev.filter((item) => item !== name))
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
      <div className={styles['quantity__wrapper']}>
        <button
          className={styles.decrease}
          onClick={handleDecrease}>
          <img
            src={'/images/02__ecommerce-component/chevron.svg'}
            alt='decrease'
          />
        </button>
        <div className={styles.quantity}>{count}</div>
        <button
          className={styles.increase}
          onClick={handleIncrease}>
          <img
            src={'/images/02__ecommerce-component/chevron.svg'}
            alt='increase'
          />
        </button>
      </div>
      <div className={styles.subtotal}>
        {count > 0 ? (
          formatPrice(price * count)
        ) : (
          <button onClick={handleRemove}>❌ Del</button> //
        )}
      </div>
    </li>
  )
}

function Cart({ data, setData, cart, setCart }) {
  const priceSubtotal = data
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
        {data
          .filter((m) => cart.includes(m.name))
          .map((m) => (
            <CartItem
              key={m.name}
              {...m}
              setData={setData}
              cart={cart}
              setCart={setCart}
            />
          ))}
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
export default function ECommerceComponent() {
  const [data, setData] = useState(menuItems)
  const [cart, setCart] = useState([])

  return (
    <div className={styles.body}>
      <div className={`${styles.wrapper} ${styles.menu}`}>
        <Menu
          data={data}
          setData={setData}
          cart={cart}
          setCart={setCart}
        />
        <Cart
          data={data}
          setData={setData}
          cart={cart}
          setCart={setCart}
        />
      </div>
    </div>
  )
}
