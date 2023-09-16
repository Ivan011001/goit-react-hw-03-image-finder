import { Component } from 'react';
import { ModalWindow, Overlay, ModalImg } from './Modal.styled';

export default class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.escapeHandlePress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escapeHandlePress);
  }

  overlayHandleClick = evt => {
    const { toggleModal } = this.props;

    if (evt.target === evt.currentTarget) {
      toggleModal();
    }
  };

  escapeHandlePress = evt => {
    const { toggleModal } = this.props;

    if (evt.code === 'Escape') {
      toggleModal();
    }
  };

  render() {
    return (
      <>
        <Overlay onClick={this.overlayHandleClick}>
          <ModalWindow>
            <ModalImg />
          </ModalWindow>
        </Overlay>
      </>
    );
  }
}
