import { createSlice } from '@reduxjs/toolkit';

import {
  fetchTransactions,
  fetchTransactionById,
  addTransaction,
  updateTransactionById,
  removeTransaction,
} from './transactions-operation';

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

    [fetchTransactionById.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [fetchTransactionById.fulfilled]: (store, { payload }) => {
      store.loading = false;
    },
    [fetchTransactionById.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [addTransaction.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [addTransaction.fulfilled]: (store, { payload }) => {
      store.loading = false;
    },
    [addTransaction.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [updateTransactionById.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [updateTransactionById.fulfilled]: (store, { payload }) => {
      store.loading = false;
    },
    [updateTransactionById.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [removeTransaction.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [removeTransaction.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = store.items.result.filter(item => item.id !== payload);
    },
    [removeTransaction.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default transactionReducer.reducer;
