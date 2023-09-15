import { Component } from 'react';

import Searchbar from './Searchbar';
import Loader from './Loader';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';
import Modal from './Modal';
import Button from './Button';

export default class App extends Component {
  state = {
    searchValue: '',
  };

  onSearchFormSubmit = searchValue => {
    this.setState({ searchValue });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSearchFormSubmit} />
        <Loader />
        <ImageGallery />
        <ImageGalleryItem />
        <Modal />
        <Button />
      </div>
    );
  }
}
