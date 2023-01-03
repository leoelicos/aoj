import { createContext, useReducer } from 'react'
import initialMenu from '../app'
export const MenuContext = createContext(null)
export const MenuDispatchContext = createContext(null)

export default function MenuProvider({ children }) {
  const [menu, dispatch] = useReducer(menuReducer, initialMenu)
  return (
    <MenuContext.Provider value={menu}>
      <MenuDispatchContext.Provider value={dispatch}>{children}</MenuDispatchContext.Provider>
    </MenuContext.Provider>
  )
}

function menuReducer(menu, action) {
  switch (action.type) {
    case 'increased': {
      return menu.map((item) =>
        item.name !== action.name
          ? item
          : {
              ...item,
              count: item.count + 1
            }
      )
    }
    case 'decreased': {
      return menu.map((item) =>
        item.name !== action.name
          ? item
          : {
              ...item,
              count: Math.max(item.count - 1, 0)
            }
      )
    }
    case 'addedFromMenu': {
      return menu.map((item) => (item.name !== action.name ? item : { ...item, count: 1 }))
    }
    default: {
      return new Error('Action not found')
    }
  }
}
