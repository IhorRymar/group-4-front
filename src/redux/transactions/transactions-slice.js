import { createSlice } from '@reduxjs/toolkit';

import { fetchTransactions, addTrasaciotn } from './transactions-operation';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const transactionReducer = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: {
    [fetchTransactions.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [fetchTransactions.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    [fetchTransactions.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [addTrasaciotn.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [addTrasaciotn.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = store.items.push(payload);
    },
    [addTrasaciotn.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default transactionReducer.reducer;
