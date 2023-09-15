import { ModalWindow, Overlay, ModalImg } from './Modal.styled';

export default function Modal({ img }) {
  return (
    <Overlay>
      <ModalWindow>
        <ModalImg src={img} alt="" />
      </ModalWindow>
    </Overlay>
  );
}
