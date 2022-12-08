import { createSlice } from "@reduxjs/toolkit";

import { fetchStatistics } from "./statistics-operations";

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState: {
    expenses: [],
    income: [],
    loading: false,
    error: null,
  },

  extraReducers: {
    [fetchStatistics.pending]: (store) => {
      store.loading = true;
      store.error = null;
    },
    [fetchStatistics.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.expenses = payload.expenseStatistics;
      store.income = payload.incomeStatistics;
    },
    [fetchStatistics.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  }  
});

export default statisticsSlice.reducer;