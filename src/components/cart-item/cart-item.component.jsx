import {
  CartItemContainer,
  CartItemImage,
  CartItemDetails,
  CartItemName,
  CartItemPrice
} from './cart-item.styles'

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={`${name}`} />
      <CartItemDetails>
        <CartItemName>{name}</CartItemName>
        <CartItemPrice>
          {quantity} * ${price}
        </CartItemPrice>
      </CartItemDetails>
    </CartItemContainer>
  )
}

export default CartItem
