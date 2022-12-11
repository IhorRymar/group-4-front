import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/categories';

export const fetchTransactionsCategories = createAsyncThunk(
  'categories/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.getTransactionsCategories();

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
