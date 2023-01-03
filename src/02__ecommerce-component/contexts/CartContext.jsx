import { createContext, useReducer } from 'react'
export const CartContext = createContext(null)
export const CartDispatchContext = createContext(null)

export default function CartProvider({ children }) {
  const initialCart = []
  const [cart, dispatch] = useReducer(cartReducer, initialCart)
  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>{children}</CartDispatchContext.Provider>
    </CartContext.Provider>
  )
}

function cartReducer(cart, action) {
  switch (action.type) {
    case 'addedToCart': {
      return cart.includes(action.name) ? cart : cart.concat(action.name)
    }
    case 'removedFromCart': {
      return cart.filter((item) => item !== action.name)
    }
    default: {
      return new Error('Action not found')
    }
  }
}
