import PageContainer from 'components/PageContainer/PageContainer';
import { Navigation } from 'components/Navigation/Navigation';
import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import DiagramTab from 'components/DiagramTab/DiagramTab';

import { MainWrapper, NavBalanceWrapper } from './StatsPage.styled';

const StatsPage = () => {
  const { width } = useWindowDimensions();

  return (
    <PageContainer>
      <MainWrapper>
        <NavBalanceWrapper>
          <Navigation />
          {(width >= 768) ? <Balance /> : null }
        </NavBalanceWrapper>
        {(width >= 768) ? <Currency /> : null }
      </MainWrapper>
        <DiagramTab />   
    </PageContainer>
  );
}

export default StatsPage;