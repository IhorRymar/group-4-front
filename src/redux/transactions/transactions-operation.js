import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import * as api from '../../services/transactions';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetch',
  async (page, { rejectWithValue }) => {
    try {
      const data = await api.getTransactions(page);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchTransactionById = createAsyncThunk(
  'transactions/fetchById',
  async (id, { rejectWithValue }) => {
    try {
      const data = await api.getTransactionById(id);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transactions/add',
  async (transaction, { rejectWithValue }) => {
    try {
      const data = await api.addTransaction(transaction);
      toast.success('Transaction is added successfuly');
      return data;
    } catch (error) {
      toast.error(`Transaction adding is failed. ${error.message}`);
      return rejectWithValue(error);
    }
  }
);

export const updateTransactionById = createAsyncThunk(
  'transactions/update',
  async (data, { rejectWithValue }) => {
    const { id, transaction } = data;
    try {
      const data = await api.updateTransaction(id, transaction);
      toast.success('Transaction is updated successfuly');
      return data;
    } catch (error) {
      toast.error(`Transaction updating is failed. ${error.message}`);
      return rejectWithValue(error);
    }
  }
);

export const removeTransaction = createAsyncThunk(
  'transactions/remove',
  async (id, { rejectWithValue }) => {
    try {
      await api.removeTransaction(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
