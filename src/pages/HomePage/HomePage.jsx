import PageContainer from 'components/PageContainer/PageContainer';
import HomeTab from 'components/HomeTab/HomeTab';
import { ButtonCircle } from 'components/ButtonCircle/ButtonCircle';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from 'redux/modal/modal-sclice';

const HomePage = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(
    state => state.global.isAddTransactionModalOpen
  );

  const onModal = () => {
    console.log('toggle modal is');
    dispatch(toggleModal(!isModalOpen));
  };

  return (
    <PageContainer>
      <HomeTab />
      <ButtonCircle onClick={onModal}>+</ButtonCircle>
      {isModalOpen && (
        <ModalAddTransaction toggleModal={onModal} isOpen={isModalOpen} />
      )}
    </PageContainer>
  );
};

export default HomePage;
