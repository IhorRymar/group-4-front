import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import authReducer from './auth/auth-slice';
import statisticsReducer from './Statistics/statistics-slice';
import transactionReducer from './transactions/transactions-slice';
import balanceReducer from './balance/balance-slice';
import currencyReducer from './currency/currency-slice';
import storage from 'redux-persist/lib/storage';
import globalReducer from './global/global-reducer';
import categoriesReducer from './categories/categories-slice';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    statistics: statisticsReducer,
    global: globalReducer,
    transactions: transactionReducer,
    categories: categoriesReducer,
    balance: balanceReducer,
    currency: currencyReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          'transactions/update/fulfilled',
        ],
      },
      ignoredActions: [],
    }),
});

export const persistor = persistStore(store);
