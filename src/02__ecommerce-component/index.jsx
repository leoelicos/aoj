import Menu from './components/Menu'
import Cart from './components/Cart'
import MenuProvider from './contexts/MenuContext.jsx'
import CartProvider from './contexts/CartContext.jsx'
import './style/styles.css'

export default function ECommerceComponent() {
  return (
    <div className='ecommerce'>
      <div className='body'>
        <div className='wrapper menu'>
          <MenuProvider>
            <CartProvider>
              <Menu />
              <Cart />
            </CartProvider>
          </MenuProvider>
        </div>
      </div>
    </div>
  )
}
