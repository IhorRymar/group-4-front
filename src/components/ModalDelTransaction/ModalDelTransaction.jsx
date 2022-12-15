import { useDispatch, useSelector } from 'react-redux';
import { removeTransaction } from 'redux/transactions/transactions-operation';
import { isDelModalOpen } from 'redux/modal/modal-sclice';
import { delModalOpen } from 'redux/modal/modal-selector';
import { StyledButton } from 'components/StyledButton/StyledButton';
import { Modal } from '../Modal/Modal';

export const ModalDelTransaction = ({ id }) => {
  const isModalOpen = useSelector(delModalOpen);
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(isDelModalOpen(!isModalOpen));
    return {
      type: 'modal/isDelModalOpen',
    };
  };
  const handleClickOk = () => {
    toggleModal();
    dispatch(removeTransaction(id));
  };

  return (
    <Modal
      heading="Are you sure you want delete transaction?"
      toggleModal={toggleModal}
      isOpen={isModalOpen}
    >
      <StyledButton type="submit" onClick={handleClickOk}>
        YES
      </StyledButton>
    </Modal>
  );
};
