import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/balance';

export const fetchBalance = createAsyncThunk(
  'balance/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.getBalance();
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ message: data.message, status });
    }
  }
);
