import { Component } from 'react';
import Button from 'components/Button';
import Loader from 'components/Loader';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
import { getImagesBySearchQuery } from '../../services/pixabayAPI';

export default class ImageGallery extends Component {
  state = {
    images: [],
    isLoading: false,
    currentPage: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchValue !== this.props.searchValue) {
      this.setState({ images: [], isLoading: true });
      getImagesBySearchQuery(this.props.searchValue, this.state.currentPage)
        .then(newImages => this.setState({ images: newImages.hits }))
        .catch(e => console.log(e.message))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  onLoadMoreClick = () => {
    this.setState(
      prevState => ({
        isLoading: true,
        currentPage: prevState.currentPage + 1,
      }),
      this.fetchMoreImages
    );
  };

  fetchMoreImages = () => {
    getImagesBySearchQuery(this.props.searchValue, this.state.currentPage).then(
      newImages =>
        this.setState(prevState => ({
          images: [...prevState.images, ...newImages.hits],
          isLoading: false,
        }))
    );
  };

  render() {
    const { images, isLoading } = this.state;

    return (
      <>
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
        {isLoading && <Loader />}

        {images.length > 0 && <Button onClick={this.onLoadMoreClick} />}
      </>
    );
  }
}
