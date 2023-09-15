import { Component } from 'react';
import { ModalWindow, Overlay, ModalImg } from './Modal.styled';

export default class Modal extends Component {
  render() {
    const { img } = this.props;

    return (
      <Overlay>
        <ModalWindow>
          <ModalImg src={img} alt="" />
        </ModalWindow>
      </Overlay>
    );
  }
}
