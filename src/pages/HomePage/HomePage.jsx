// import PageContainer from 'components/PageContainer/PageContainer';
// import { Navigation } from 'components/Navigation/Navigation';
// import { Balance } from 'components/Balance/Balance';
// import { Currency } from 'components/Currency/Currency';
// import HomeTab from 'components/HomeTab/HomeTab';
// import { ButtonCircle } from 'components/ButtonCircle/ButtonCircle';
// import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleModal } from 'redux/modal/modal-sclice';

// import { MainWrapper, NavBalanceWrapper } from './HomePage.styled';

// const HomePage = () => {
//   const dispatch = useDispatch();
//   const isModalOpen = useSelector(
//     state => state.global.isAddTransactionModalOpen
//   );

//   const onModal = () => {
//     console.log('toggle modal is');
//     dispatch(toggleModal(!isModalOpen));
//   };

//   return (
//     <PageContainer>
//       <NavBalanceWrapper>
//         <Navigation />
//         {(width >= 768) ? <Balance /> : null }
//       </NavBalanceWrapper>

//       <HomeTab />
//       <ButtonCircle onClick={onModal}>+</ButtonCircle>
//       {isModalOpen && (
//         <ModalAddTransaction toggleModal={onModal} isOpen={isModalOpen} />
//       )}
//     </PageContainer>
//   );
// };

// export default HomePage;
