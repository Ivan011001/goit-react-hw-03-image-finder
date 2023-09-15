import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ smallImg, largeImg, tags }) {
  return (
    <GalleryItem>
      <GalleryImage src={smallImg} alt={tags} />
    </GalleryItem>
  );
}
