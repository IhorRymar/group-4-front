import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/currency';

export const fetchCurrency = createAsyncThunk(
  'currency/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.getCurrency();
      const arr = [];
      data.forEach(
        ({ currencyCodeA, currencyCodeB, rateBuy, rateSell, rateCross }) => {
          if (currencyCodeA === 840 && currencyCodeB === 980) {
            arr.push({
              currencyCodeA: { id: currencyCodeA, name: 'USD' },
              currencyCodeB: 'UAH',
              rateBuy,
              rateSell,
            });
          } else if (currencyCodeA === 978 && currencyCodeB === 980) {
            arr.push({
              currencyCodeA: { id: currencyCodeA, name: 'EUR' },
              currencyCodeB: 'UAH',
              rateBuy,
              rateSell,
            });
          } else if (currencyCodeA === 826 && currencyCodeB === 980) {
            arr.push({
              currencyCodeA: { id: currencyCodeA, name: 'GBP' },
              currencyCodeB: 'UAH',
              rateBuy: rateCross,
              rateSell: rateCross * 1.03,
            });
          }
        }
      );
      return arr;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ message: data.message, status });
    }
  }
);
