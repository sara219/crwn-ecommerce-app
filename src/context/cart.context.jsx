import { createContext } from 'react'

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
})

export const CartProvider = ({ children }) => {
  return <CartContext.Provider>{children}</CartContext.Provider>
}
