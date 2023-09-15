import { Component } from 'react';
import Loader from 'components/Loader';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
import { getImagesBySearchQuery } from '../../services/pixabayAPI';

export default class ImageGallery extends Component {
  state = {
    images: [],
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchValue !== this.props.searchValue) {
      this.setState({ isLoading: true });
      getImagesBySearchQuery(this.props.searchValue).then(newImages =>
        this.setState({ images: newImages.hits, isLoading: false })
      );
    }
  }

  render() {
    const { images, isLoading } = this.state;

    return (
      <>
        {isLoading && <Loader />}

        <Gallery>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              smallImg={image.webformatURL}
              largeImg={image.largeImageURL}
              tags={image.tags}
            />
          ))}
        </Gallery>
      </>
    );
  }
}
