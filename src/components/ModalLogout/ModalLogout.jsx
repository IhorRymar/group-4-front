import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { logoutModal } from 'redux/global/global-selectors';
import { toggleModal } from 'redux/logout-modal/logout-modal';
import { logout } from 'redux/auth/auth-operations';

import {
  ModalWindow,
  Overlay,
  Heading,
} from '../ModalAddTransaction/ModalAddTransaction.styled';

import { StyledButton } from 'components/ModalAddTransaction/StyledButton/StyledButton';

export const ModalLogout = () => {
  const LogoutModalRoot = document.querySelector('#modal-logout');

  const isLogoutModalOpen = useSelector(logoutModal);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(toggleModal(!isLogoutModalOpen));
  };

  const handleClickOk = () => {
    dispatch(toggleModal(!isLogoutModalOpen));
    dispatch(logout());
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        dispatch(toggleModal(!isLogoutModalOpen));
      }
    };

    if (isLogoutModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, isLogoutModalOpen]);

  return createPortal(
    <Overlay>
      <ModalWindow>
        <Heading>Точно впевнені?</Heading>
        <StyledButton type="submit" onClick={handleClickOk}>
          OK
        </StyledButton>
        <StyledButton type="button" onClick={closeModal}>
          Cancel
        </StyledButton>
      </ModalWindow>
    </Overlay>,
    LogoutModalRoot
  );
};
