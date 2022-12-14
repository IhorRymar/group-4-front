import { ModalWindow, Overlay } from './ModalEdit.styled';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Heading } from 'components/ModalAddTransaction/ModalAddTransaction.styled';
import { ModalEditForm } from './ModalEditForm';
import { StyledButton } from 'components/ModalAddTransaction/StyledButton/StyledButton';
import { StyledCloseButton } from 'components/ModalAddTransaction/CloseButton/CloseButton';

export const ModalEdit = ({ toggleModal, isOpen, updateTransaction }) => {
  const modalRoot = document.querySelector('#modal-root');
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, toggleModal]);

  return createPortal(
    <Overlay>
      <ModalWindow>
        <Heading>Edit transaction</Heading>

        <ModalEditForm
          toggleModal={toggleModal}
          transaction={updateTransaction}
        />
        <StyledButton type="button" onClick={toggleModal}>
          Cancel
        </StyledButton>
        <StyledCloseButton type="button" onClick={toggleModal} />
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};
