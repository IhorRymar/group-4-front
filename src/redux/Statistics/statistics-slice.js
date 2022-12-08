import { createSlice } from "@reduxjs/toolkit";

import { fetchExpenses } from "./statistics-operations";

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState: {
    stats: [1, 2, 3],
    loading: false,
    error: null,
  },

  extraReducers: {
    [fetchExpenses.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchExpenses.fullfilled]: (state, { payload }) => {
      state.loading = false;
      state.stats = payload;
    },
    [fetchExpenses.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  }  
});

export default statisticsSlice.reducer;