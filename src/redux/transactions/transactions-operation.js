import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/transactions';


export const fetchTransactions = createAsyncThunk(
    "transactions/fetch",
    async (page, { rejectWithValue }) => {
        try {
            const  data = await api.getTransactions(page);
            return data
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const addTransaction = createAsyncThunk(
  'transactions/add',
  async (transaction, { rejectWithValue }) => {
    try {
      const data = await api.addTransaction(transaction);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);