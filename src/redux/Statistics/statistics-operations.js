import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://wallet-backend.cyclic.app/api'

export const fetchExpenses = createAsyncThunk(
  'expenses/fetch',
  async (period, thunkAPI) => {
    try {
      const data = await axios.post('/transactions/statistics', period);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
