import Spinner from 'components/Spinner/Spinner';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBalance } from 'redux/balance/balance-operation';
import { getBalance } from 'redux/balance/balance-selector';
import { BalanceStyled, Text, Wrapper } from './Balance.styled';

export const Balance = () => {
  const { balance: data, loading } = useSelector(getBalance);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBalance());
  }, [dispatch]);

  return (
    <Wrapper>
      <Text>Your balance</Text>
      {loading ? <Spinner /> : null}
      <BalanceStyled balance={data.balance}></BalanceStyled>
    </Wrapper>
  );
};
