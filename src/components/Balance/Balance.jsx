import React from 'react';
import { BalanceStyled, Text, Wrapper } from './Balance.styled';

export const Balance = () => {
  return (
    <Wrapper>
      <Text>Your balance</Text>
      <BalanceStyled>₴ 24 000.00</BalanceStyled>
    </Wrapper>
  );
};
