import Menu from './components/Menu'
import Cart from './components/Cart'
import MenuProvider from './contexts/MenuContext'
import CartProvider from './contexts/CartContext'
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
