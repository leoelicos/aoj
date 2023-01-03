import Menu from './components/Menu'
import Cart from './components/Cart'
import MenuProvider from './contexts/MenuContext.jsx'
import CartProvider from './contexts/CartContext.jsx'
import styles from './style/styles.module.css'

export default function ECommerceComponent() {
  return (
    <div className={styles.body}>
      <div className={`${styles.wrapper} ${styles.menu}`}>
        <MenuProvider>
          <CartProvider>
            <Menu />
            <Cart />
          </CartProvider>
        </MenuProvider>
      </div>
    </div>
  )
}
