import { createContext, useState } from 'react'

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const value = { isCartOpen, setIsCartOpen }
//   console.log(isCartOpen,1111);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
