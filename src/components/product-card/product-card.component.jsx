import { useContext } from 'react'

import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'
import { CartContext } from '../../context/cart.context'
import { CardName, CardPrice, Footer, ProductCardContainer } from './product-card.styles'



const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product

  const { addItemToCart } = useContext(CartContext)

  const addProductToCart = () => addItemToCart(product)

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <CardName>{name}</CardName>
        <CardPrice>{price}</CardPrice>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to card
      </Button>
    </ProductCardContainer>
  )
}

export default ProductCard
