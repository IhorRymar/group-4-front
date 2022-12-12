import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import * as api from '../../services/auth';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signup(data);
      toast.success('Congratulations!!! You have registered');
      return result;
    } catch (error) {
      if (error.response.status === 400) {
        return rejectWithValue(
          toast.error('The e-mail or password is incorrect')
        );
      }
      if (error.response.status === 409) {
        return rejectWithValue(toast.error('User has already created'));
      }
      return rejectWithValue(
        toast.error('Something went wrong! Try signup again')
      );
    }
  }
);

export const login = createAsyncThunk(
  'auth/signin',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      toast.success('you are logged in');
      return result;
    } catch (error) {
      if (error.response.status === 400) {
        return rejectWithValue(toast.error('Login error! Try login again.'));
      }
      if (error.response.status === 401) {
        return rejectWithValue(
          toast.error('The e-mail or password is incorrect')
        );
      }
      return rejectWithValue(
        toast.error('Something went wrong! Try login again')
      );
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await api.getCurrent(auth.token);
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);
export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await api.logout(auth.token);
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);
