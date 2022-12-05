import { createContext, useState } from 'react'

// Helper Function::
const addCartItem = (cartItem, productToAdd) => {
  // find if cartItem contains product To add
  // if found, increment quantity
  // return new array with modified cartItem / new cart item
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItem: [],
  addItemToCart: () => {},
})

/* 
Product
{
    id,
    name,
    price,
    imageUrl
}

Cart Item 
{
    id,
    name,
    price,
    imageUrl,
    quantity
}
*/

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const value = { isCartOpen, setIsCartOpen }
  //   console.log(isCartOpen,1111);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
