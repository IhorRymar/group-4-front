import PageContainer from 'components/PageContainer/PageContainer';
import { Navigation } from 'components/Navigation/Navigation';
import { Balance } from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import { ButtonCircle } from 'components/ButtonCircle/ButtonCircle';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from 'redux/modal/modal-sclice';
import { Outlet } from 'react-router';
import { useWindowDimensions } from 'hooks/useWindowDimensions';

import { MainWrapper, NavBalanceWrapper } from './DashboardPage.styled';

const DashboardPage = () => {
  const { width } = useWindowDimensions();

  const isModalOpen = useSelector(
    state => state.global.isAddTransactionModalOpen
  );

  const dispatch = useDispatch();

  const onModal = () => {
    dispatch(toggleModal(!isModalOpen));
  };

  return (
    <PageContainer>
      <MainWrapper>
        <NavBalanceWrapper>
          <Navigation />
          {width >= 768 ? <Balance /> : null}
        </NavBalanceWrapper>
        {width >= 768 ? <Currency /> : null}
      </MainWrapper>
      <Outlet />
      <ButtonCircle onClick={onModal}>+</ButtonCircle>
      {isModalOpen && (
        <ModalAddTransaction toggleModal={onModal} isOpen={isModalOpen} />
      )}
    </PageContainer>
  );
};

// import React from 'react';
// import Media from 'react-media';
// import GlobalContainer from '../../container';
// import { Container } from 'container/Container.styled';
// import { mediaQueries } from '../../utils';

// import { DashdoardDesktop } from './DashboardPage.styled';
// import HomePage from 'pages/HomePage/HomePage';

// const DashboardPage = () => {
//   return (

//     <GlobalContainer>
//       <Container>
//         <Media queries={mediaQueries}>
//           {(matches) => (
//             <>
//                 {matches.mobile && (
//                     <div>
//                       <HomePage />

//                     </div>
//                 )}
//               {matches.tablet && (
//                 <div>
//                     <HomePage />

//                 </div>
//               )}
//               {matches.desktop && (

//                   <DashdoardDesktop>
//                       <div>
//                           <HomePage />

//                       </div>
//                    </DashdoardDesktop>

//               )}
//             </>
//           )}
//         </Media>

//       </Container>
//     </GlobalContainer>
//   );
// };

export default DashboardPage;
