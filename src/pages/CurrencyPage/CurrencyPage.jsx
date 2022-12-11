import PageContainer from 'components/PageContainer/PageContainer';
import { Navigation } from 'components/Navigation/Navigation';
import { Currency } from 'components/Currency/Currency';

const CurrencyPage = () => {

  return (
    <PageContainer>
      <Navigation />
        <Currency />   
    </PageContainer>
  );
}

export default CurrencyPage;