import { createSlice } from '@reduxjs/toolkit';

import { fetchBalance } from './balance-operation';

const initialState = {
  balance: {balance: 0},
  loading: false,
  error: null,
};

const balanceReducer = createSlice({
  name: 'balance',
  initialState,
  extraReducers: {
    [fetchBalance.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [fetchBalance.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.balance = payload;
    },
    [fetchBalance.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default balanceReducer.reducer;
