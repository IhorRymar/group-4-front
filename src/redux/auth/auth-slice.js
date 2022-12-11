import { createSlice } from '@reduxjs/toolkit';

import { signup, login, current, logout } from './auth-operations';

const initialState = {
  user: '',
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signup.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [signup.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.name;
      store.token = payload.user.accessToken;
      store.isLogin = true;
    },
    [signup.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [login.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [login.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.name;
      store.token = payload.accessToken;
      store.isLogin = true;
    },
    [login.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [current.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [current.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.name;
      store.token = payload.accessToken;
      store.isLogin = true;
    },
    [current.rejected]: (store, { payload }) => {
      store.loading = false;
      store.token = '';
      store.error = payload;
    },

    // logout

    [logout.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [logout.fulfilled]: (store, { payload }) => {
      store.user = '';
      store.token = '';
      store.isLogin = false;
      store.loading = false;
      store.error = null;
    },
    [logout.rejected]: (store, { payload }) => {
      store.loading = false;
      store.token = '';
      store.error = payload;
    },
  },
});

export default authSlice.reducer;
