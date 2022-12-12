import Spinner from 'components/Spinner/Spinner';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBalance } from 'redux/balance/balance-operation';
import { getBalance } from 'redux/balance/balance-selector';
import { BalanceStyled, Text, Wrapper, CurrencySymbol } from './Balance.styled';

export const Balance = () => {
  const { balance: data, loading } = useSelector(getBalance);
  const transactions = useSelector(state => state.transactions.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBalance());
  }, [dispatch, transactions.transactionsTotalQuantity]);

  return (
    <Wrapper>
      <Text>Your balance</Text>
      {loading ? <Spinner /> : null}
      {/* <BalanceStyled balance={data.balance}></BalanceStyled> */}
      <BalanceStyled><CurrencySymbol>₴</CurrencySymbol> {data.balance.toFixed(2)}</BalanceStyled>
    </Wrapper>
  );
};
