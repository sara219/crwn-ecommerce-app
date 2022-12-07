import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem }) => {
  const { clearItemFromCart } = useContext(CartContext)
  const { name, imageUrl, price, quantity } = cartItem

  const ClearItemHandler = () => clearItemFromCart(cartItem)

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${imageUrl}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={ClearItemHandler}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem
