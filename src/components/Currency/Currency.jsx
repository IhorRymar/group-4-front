import React, { useEffect } from 'react';

// import { Navigation } from 'components/Navigation/Navigation';
// import { Balance } from 'components/Balance/Balance';
// import { useWindowDimensions } from '../../hooks/useWindowDimensions';
// import { Container } from 'container/Container.styled';
import {
  Background,
  // ContainerStyled,
  // Item,
  // ItemField,
  // Line,
  Table,
  TextItem,
  TextItemText,
  TextList,
  TitleItem,
  TitleList,
  // Wrapper,
} from './Currency.styled';
// import Spinner from 'components/Spinner/Spinner';
import { fetchCurrency } from 'redux/currency/currency-operation';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrency } from 'redux/currency/currency-selector';
import { toast } from 'react-toastify';

export const Currency = () => {
  // const { width } = useWindowDimensions();

  const { currency: data, error } = useSelector(getCurrency);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);

  if (error?.status === 429) {
    toast.warn('So more request', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',

      style: {
        maxWidth: '250px',
        backgroundColor: '#c0b84b',
        margin: '0 auto',
        marginBottom: '10px',
      },
    });
  }

  return (
    <Table>
      <TitleList>
        <TitleItem>Currency</TitleItem>
        <TitleItem>Purchase</TitleItem>
        <TitleItem>Sale</TitleItem>
      </TitleList>
      <TextList>
        {data?.length ? (
          data?.map(item => (
            <TextItem key={item.currencyCodeA.id}>
              <TextItemText>{item.currencyCodeA.name}</TextItemText>
              <TextItemText>{item.rateBuy.toFixed(2)}</TextItemText>
              <TextItemText>{item.rateSell.toFixed(2)}</TextItemText>
            </TextItem>
          ))
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              fontSize: '20px',
              color: '#fff',
              textAlign: 'center',
            }}
          >
            Currency Not Found!{' '}
          </div>
        )}
      </TextList>
      <Background></Background>
    </Table>
    // <Container>
    //   {loading ? <Spinner /> : null}
    //   <ContainerStyled>
    //     <Wrapper>
    //       <Item>
    //         <ItemField>
    //           <Navigation />
    //         </ItemField>
    //         <ItemField>{width >= 768 ? <Balance /> : null}</ItemField>
    //       </Item>
    //       <Table>
    //         <TitleList>
    //           <TitleItem>Currency</TitleItem>
    //           <TitleItem>Purchase</TitleItem>
    //           <TitleItem>Sale</TitleItem>
    //         </TitleList>
    //         <TextList>
    //           {data?.length ? (
    //             data?.map(item => (
    //               <TextItem key={item.currencyCodeA.id}>
    //                 <TextItemText>{item.currencyCodeA.name}</TextItemText>
    //                 <TextItemText>{item.rateBuy.toFixed(2)}</TextItemText>
    //                 <TextItemText>{item.rateSell.toFixed(2)}</TextItemText>
    //               </TextItem>
    //             ))
    //           ) : (
    //             <div
    //               style={{
    //                 width: '100%',
    //                 height: '100%',
    //                 fontSize: '20px',
    //                 color: '#fff',
    //                 textAlign: 'center',
    //               }}
    //             >
    //               Currency Not Found!{' '}
    //             </div>
    //           )}
    //         </TextList>
    //         <Background></Background>
    //       </Table>
    //       {width >= 1280 ? <Line /> : null}
    //     </Wrapper>
    //   </ContainerStyled>
    // </Container>
  );
};
