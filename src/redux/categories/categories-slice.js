import { createSlice } from '@reduxjs/toolkit';
import { fetchTransactionsCategories } from './categories-operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const categoriesReducer = createSlice({
  name: 'categories',
  initialState,
  extraReducers: {
    [fetchTransactionsCategories.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [fetchTransactionsCategories.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    [fetchTransactionsCategories.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default categoriesReducer.reducer;
