import { useDispatch, useSelector } from 'react-redux';
import { TransactionForm } from 'components/TransactionForm/TransactionForm';
import { addModalOpen } from 'redux/modal/modal-selector';
import { isAddModalOpen } from 'redux/modal/modal-sclice';
import { Modal } from '../Modal/Modal';

export const ModalAddTransaction = () => {
  const isModalOpen = useSelector(addModalOpen);
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(isAddModalOpen(!isAddModalOpen));
    return {
      type: 'modal/isAddModalOpen',
    };
  };
  return (
    <Modal
      heading="AddTransaction"
      toggleModal={toggleModal}
      isOpen={isModalOpen}
    >
      <TransactionForm typeForm="add" />
    </Modal>
  );
};
