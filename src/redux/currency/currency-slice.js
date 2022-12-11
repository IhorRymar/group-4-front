import { createSlice } from '@reduxjs/toolkit';

import { fetchCurrency } from './currency-operation';

const initialState = {
  currency: [],
  loading: false,
  error: null,
};

const currencyReducer = createSlice({
  name: 'currency',
  initialState,
  extraReducers: {
    [fetchCurrency.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [fetchCurrency.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.currency = [...payload];
    },
    [fetchCurrency.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default currencyReducer.reducer;
