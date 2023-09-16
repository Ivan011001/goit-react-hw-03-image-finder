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
    imagesLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchValue !== this.props.searchValue) {
      this.setState(
        { images: [], isLoading: true, currentPage: 1, imagesLoading: false },
        this.fetchImages
      );
    }
  }

  onLoadMoreClick = () => {
    this.setState(
      prevState => ({
        isLoading: true,
        currentPage: prevState.currentPage + 1,
      }),
      this.fetchImages
    );
  };

  fetchImages = () => {
    getImagesBySearchQuery(this.props.searchValue, this.state.currentPage)
      .then(newImages => {
        this.setState(prevState => ({
          images: [...prevState.images, ...newImages.hits],
          imagesLoading: true,
        }));

        if (newImages.hits.length < 12) this.setState({ imagesLoading: false });
      })
      .catch(e => console.log(e))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { images, isLoading, imagesLoading } = this.state;

    return (
      <>
        <Gallery>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              smallImg={image.webformatURL}
              largeImg={image.largeImageURL}
              tags={image.tags}
              toggleModal={() => this.props.toggleModal(image.largeImageURL)}
            />
          ))}
        </Gallery>

        {isLoading && <Loader />}

        {imagesLoading && <Button onClick={this.onLoadMoreClick} />}
      </>
    );
  }
}
