import { GlobalStyle } from 'GlobalStyle.styled';

import { Component } from 'react';
import { AppContainer } from './App.styled';

import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Modal from 'components/Modal';

export default class App extends Component {
  state = {
    searchValue: '',
    modalOpened: false,
    modalImage: null,
  };

  onSearchFormSubmit = searchValue => {
    this.setState({ searchValue });
  };

  toggleModal = img => {
    this.setState(prevState => ({
      modalOpened: !prevState.modalOpened,
      modalImage: img,
    }));
  };

  render() {
    const { searchValue, modalOpened, modalImage } = this.state;

    return (
      <>
        <GlobalStyle $modalOpened={modalOpened} />
        <AppContainer>
          <Searchbar onSubmit={this.onSearchFormSubmit} />
          <ImageGallery
            searchValue={searchValue}
            toggleModal={this.toggleModal}
          />
          {modalOpened && (
            <Modal toggleModal={this.toggleModal} img={modalImage} />
          )}
        </AppContainer>
      </>
    );
  }
}
