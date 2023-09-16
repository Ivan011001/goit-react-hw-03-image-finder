import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({
  smallImg,
  largeImg,
  tags,
  toggleModal,
}) {
  return (
    <GalleryItem onClick={toggleModal}>
      <GalleryImage src={smallImg} alt={tags} />
    </GalleryItem>
  );
}
