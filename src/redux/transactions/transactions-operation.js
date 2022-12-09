import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../services/transactions';

export const fetchTransactions = createAsyncThunk(
    "transactions/fetch",
    async (_, { rejectWithValue }) => {
        try {
            const  data = await api.getTransactions();
            return data
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)
