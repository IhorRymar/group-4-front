import React, { useEffect, useState } from 'react';

import { Navigation } from 'components/Navigation/Navigation';
import { currency } from 'api/currency';
import { Balance } from 'components/Balance/Balance';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { Container } from 'container/Container.styled';
import {
  Background,
  ContainerStyled,
  Item,
  ItemField,
  Line,
  Table,
  TextItem,
  TextItemText,
  TextList,
  TitleItem,
  TitleList,
  Wrapper,
} from './Currency.styled';

export const Currency = () => {
  const [data, setData] = useState(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    (async () => {
      const dataCur = await currency();
      setData([...dataCur]);
    })();
  }, []);

  return (
    <Container>
      <ContainerStyled>
        <Wrapper>
          <Item>
            <ItemField>
              <Navigation />
            </ItemField>
            <ItemField>{width >= 768 ? <Balance /> : null}</ItemField>
          </Item>
          <Table>
            <TitleList>
              <TitleItem>Currency</TitleItem>
              <TitleItem>Purchase</TitleItem>
              <TitleItem>Sale</TitleItem>
            </TitleList>
            <TextList>
              {data ? (
                data?.map(item => (
                  <TextItem key={item.currencyCodeA.id}>
                    <TextItemText>{item.currencyCodeA.name}</TextItemText>
                    <TextItemText>{item.rateBuy.toFixed(2)}</TextItemText>
                    <TextItemText>{item.rateSell.toFixed(2)}</TextItemText>
                  </TextItem>
                ))
              ) : (
                <div style={{ color: '#f0f010', fontSize: '25px' }}>
                  Loading ...
                </div>
              )}
            </TextList>
            <Background></Background>
          </Table>
          {width >= 1280 ? <Line /> : null}
        </Wrapper>
      </ContainerStyled>
    </Container>
  );
};
