import { useNavigate } from 'react-router-dom'
import {
  DirectoryItemsContainer,
  BackgroundImage,
  Body,
} from './directory-item.styles'

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category
  const navigate = useNavigate()

  const onNavigateHandler = () => navigate(route)

  return (
    <DirectoryItemsContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemsContainer>
  )
}

export default DirectoryItem
