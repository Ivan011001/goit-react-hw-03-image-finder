import { Component } from 'react';
import { AppContainer } from './App.styled';

import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';

export default class App extends Component {
  state = {
    searchValue: '',
  };

  onSearchFormSubmit = searchValue => {
    this.setState({ searchValue });
  };

  render() {
    const { searchValue } = this.state;

    return (
      <AppContainer>
        <Searchbar onSubmit={this.onSearchFormSubmit} />
        <ImageGallery searchValue={searchValue} />
      </AppContainer>
    );
  }
}
