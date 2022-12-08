import { ModalWindow, Overlay } from './ModalAddTransaction.styled';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { StyledButton } from 'components/StyledButton/StyledButton';
import { AddTransactionForm } from '../AddTransactionForm/AddTransactionForm';
import { Heading } from './ModalAddTransaction.styled';

export const ModalAddTransaction = ({ toggleModal, isOpen }) => {
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

  // const handleClick = (e) => {
  //   if (e.target === e.currentTarget) {
  //     toggleModal();
  //   }
  // };

  return createPortal(
    <Overlay>
      <ModalWindow>
        <Heading>Add transaction</Heading>

        <AddTransactionForm />
        <StyledButton type="button">Cancel</StyledButton>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};
