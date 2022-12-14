import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { isLogOutModalOpen } from 'redux/modal/modal-sclice';
import { logOutModalOpen } from 'redux/modal/modal-selector';
import { StyledButton } from 'components/StyledButton/StyledButton';
import { Modal } from '../Modal/Modal';
export const ModalLogout = () => {
  const isModalOpen = useSelector(logOutModalOpen);
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(isLogOutModalOpen(!isModalOpen));
  };
  const handleClickOk = () => {
    toggleModal();
    dispatch(logout());
  };

  return (
    <Modal
      heading="Confirm logout?"
      toggleModal={toggleModal}
      isOpen={isModalOpen}
    >
      <StyledButton type="submit" onClick={handleClickOk}>
        OK
      </StyledButton>
    </Modal>
  );
};
