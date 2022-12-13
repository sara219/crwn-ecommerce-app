import { useContext } from 'react'

import { CartContext } from '../../context/cart.context'

import { CartIconContainer, ShoppingIcon, ItemsCount } from './cart.styles'

const Cart = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

  const toggleCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemsCount>{cartCount}</ItemsCount>
    </CartIconContainer>
  )
}

export default Cart
