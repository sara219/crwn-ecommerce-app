import { createContext, useState } from 'react'

// TODO: Helper Function::
const addCartItem = (cartItem, productToAdd) => {
  //find if cartItem contains product To add
  const existingCartItem = cartItem.find(
    (cartItem) => cartItem.id === productToAdd.id
  )
  //if found, increment quantity
  if (existingCartItem) {
    return cartItem.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }
  //return new array with modified cartItem / new cart item
  return [...cartItem, { ...productToAdd, quantity: 1 }]
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItem: [],
  addItemToCart: () => {},
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems }
  //   console.log(isCartOpen,1111);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
