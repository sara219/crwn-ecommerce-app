import {
  DirectoryItemsContainer,
  BackgroundImage,
  Body,
} from './directory-item.styles'

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category
  return (
    <DirectoryItemsContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemsContainer>
  )
}

export default DirectoryItem
