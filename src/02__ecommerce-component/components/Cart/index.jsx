import { useContext } from 'react'

import { MenuContext } from '../../contexts/MenuContext'
import { CartContext } from '../../contexts/CartContext'

import CartItem from '../CartItem'

import { formatPrice } from '../../utils'

import '../../style/styles.css'

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
    <div className='panel cart'>
      <h1>Your Cart{cart.length === 0 && ' Is Empty'}</h1>
      <ul className='cart-summary'>
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

      <div className='totals'>
        <div className='line-item'>
          <div className='label'>Subtotal:</div>
          <div className='amount price subtotal'>{formatPrice(priceSubtotal)}</div>
        </div>
        <div className='line-item'>
          <div className='label'>Tax:</div>
          <div className='amount price tax'>{formatPrice(priceTax)}</div>
        </div>
        <div className='line-item total'>
          <div className='label'>Total:</div>
          <div className='amount price total'>{formatPrice(priceTotal)}</div>
        </div>
      </div>
    </div>
  )
}
export default Cart
