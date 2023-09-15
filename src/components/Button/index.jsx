import { LoadButton } from './Button.styled';
import { getImagesBySearchQuery } from 'services/pixabayAPI';

export default function Button({ onClick }) {
  return <LoadButton onClick={onClick}>Load More</LoadButton>;
}
