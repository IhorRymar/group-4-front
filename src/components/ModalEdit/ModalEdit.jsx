import { useDispatch, useSelector } from 'react-redux';
import { TransactionForm } from 'components/TransactionForm/TransactionForm';
import { editTransOpen } from 'redux/modal/modal-selector';
import { isEditModalOpen } from 'redux/modal/modal-sclice';
import { Modal } from 'components/Modal/Modal';

export const ModalEdit = ({ updateTransaction }) => {
  const isOpen = useSelector(editTransOpen);
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(isEditModalOpen(!isOpen));
    return {
      type: 'modal/isEditModalOpen',
    };
  };
  return (
    <Modal heading="Edit transaction" toggleModal={toggleModal} isOpen={isOpen}>
      <TransactionForm typeForm="update" transaction={updateTransaction} />
    </Modal>
  );
};
