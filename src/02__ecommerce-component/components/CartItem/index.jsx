import { useContext } from 'react'
import { formatPrice } from '../../utils'

import { MenuDispatchContext } from '../../contexts/MenuContext'
import { CartDispatchContext } from '../../contexts/CartContext'

import '../../style/styles.css'

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
      <div className='plate'>
        <img
          src={image}
          alt={alt}
          className='plate'
        />
        <div className='quantity'>1</div>
      </div>
      <div className='content'>
        <p className='menu-item'>{name}</p>
        <p className='price'>{formatPrice(price)}</p>
      </div>
      <div className='wrapper'>
        {count === 0 ? (
          <button
            className='decrease'
            onClick={handleRemove}>
            ❌
          </button>
        ) : (
          <button
            className='decrease'
            onClick={handleDecrease}>
            <img
              src={'/images/02__ecommerce-component/chevron.svg'}
              alt='decrease'
            />
          </button>
        )}
        <div className='quantity'>{count}</div>
        <button
          className='increase'
          onClick={handleIncrease}>
          <img
            src={'/images/02__ecommerce-component/chevron.svg'}
            alt='increase'
          />
        </button>
      </div>
      <div className='subtotal'>{formatPrice(price * count)}</div>
    </li>
  )
}
export default CartItem
