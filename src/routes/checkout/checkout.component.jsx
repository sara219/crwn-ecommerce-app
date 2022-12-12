import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import {
  CheckoutContainer,
  CheckoutHeader,
  Header,
  TotalPrice,
} from './checkout.styles'

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext)
  //   console.log(cartItems, 1)

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <Header>
          <span>Product</span>
        </Header>
        <Header>
          <span>Description</span>
        </Header>
        <Header>
          <span>Quantity</span>
        </Header>
        <Header>
          <span>Price</span>
        </Header>
        <Header>
          <span>Remove</span>
        </Header>
      </CheckoutHeader>

      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      })}
      <TotalPrice>Total: ${cartTotal}</TotalPrice>
    </CheckoutContainer>
  )
}

export default Checkout
