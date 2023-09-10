import { ItemImg,Item} from '../ImageGalleryItem/ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image: { id, webformatURL,largeImageURL}, onOpen}) => {
  return (
      <Item key ={id} onClick={() => onOpen(largeImageURL)}>
 <ItemImg src={webformatURL} alt="" />
</Item>
  );
};

