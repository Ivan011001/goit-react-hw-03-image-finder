import { Component } from 'react';
import { GoSearch } from 'react-icons/go';
import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  onInputChange = evt => {
    this.setState({
      searchValue: evt.currentTarget.value,
    });
  };

  onFormSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.searchValue);
    this.setState({ searchValue: '' });
  };

  render() {
    const { searchValue } = this.state;

    return (
      <SearchBar>
        <SearchForm onSubmit={this.onFormSubmit}>
          <SearchFormButton>
            <GoSearch size="24" />
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchValue}
            onChange={this.onInputChange}
          />
        </SearchForm>
      </SearchBar>
    );
  }
}
