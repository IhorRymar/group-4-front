import PageContainer from 'components/PageContainer/PageContainer';
import { Navigation } from 'components/Navigation/Navigation';
import { Balance } from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import { Outlet } from 'react-router';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { MainWrapper, NavBalanceWrapper } from './DashboardPage.styled';

const DashboardPage = () => {
  const { width } = useWindowDimensions();

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
    </PageContainer>
  );
};

export default DashboardPage;
