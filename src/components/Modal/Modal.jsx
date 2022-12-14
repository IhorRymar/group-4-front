import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { ModalWindow, Overlay } from './ModalStyled';

import { Heading } from './ModalStyled';
import { StyledButton } from 'components/StyledButton/StyledButton';
import { StyledCloseButton } from 'components/CloseButton/CloseButtong';

export const Modal = ({ toggleModal, heading, isOpen, children }) => {
  const modalRoot = document.querySelector('#modal-root');

  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        dispatch(toggleModal(!isOpen));
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, isOpen, toggleModal]);

  return createPortal(
    <Overlay>
      <ModalWindow>
        <Heading>{heading}</Heading>
        {children}
        <StyledButton type="button" onClick={toggleModal}>
          Cancel
        </StyledButton>
        <StyledCloseButton type="button" onClick={toggleModal} />
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};
