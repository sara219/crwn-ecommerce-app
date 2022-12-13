import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

import {
  CheckoutItemContainer,
  ImageContainer,
  RemoveButton,
  Arrow,
  ItemName,
  ItemPrice,
  ItemQuantity,
  ItemValueQuantity,
} from './checkout-item.styles'

const CheckoutItem = ({ cartItem }) => {
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext)
  const { name, imageUrl, price, quantity } = cartItem

  const ClearItemHandler = () => clearItemFromCart(cartItem)
  const addItemHandler = () => addItemToCart(cartItem)
  const removeItemHandler = () => removeItemFromCart(cartItem)

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${imageUrl}`} />
      </ImageContainer>
      <ItemName>{name}</ItemName>
      <ItemQuantity>
        <Arrow onClick={addItemHandler}>&#10094;</Arrow>
        <ItemValueQuantity>{quantity}</ItemValueQuantity>
        <Arrow onClick={removeItemHandler}>&#10095;</Arrow>
      </ItemQuantity>
      <ItemPrice>{price}</ItemPrice>
      <RemoveButton onClick={ClearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem
