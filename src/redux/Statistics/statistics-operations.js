import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../../services/auth';

export const fetchStatistics = createAsyncThunk(
  'statistics/fetch',
  async (periodData, thunkAPI) => {
    try {
      const result = await api.getStatistics(periodData);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
