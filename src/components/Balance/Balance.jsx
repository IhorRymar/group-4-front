import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBalance } from 'redux/balance/balance-operation';
import { BalanceStyled, Text, Wrapper, CurrencySymbol } from './Balance.styled';

export const Balance = () => {
  const { balance } = useSelector(state => state.balance);
  const transactions = useSelector(state => state.transactions.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBalance());
  }, [dispatch, transactions.transactionsTotalQuantity]);

  return (
    <Wrapper>
      <Text>Your balance</Text>
      {/* <BalanceStyled balance={data.balance}></BalanceStyled> */}
      <BalanceStyled><CurrencySymbol>₴</CurrencySymbol> {(balance === 0) ? '0.00' : balance.balance.toFixed(2)}</BalanceStyled>
    </Wrapper>
  );
};
