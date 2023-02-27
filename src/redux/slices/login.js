import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLogin = createAsyncThunk('login/fetchUserData', async () => {
  const { data } = await axios.get('https://reqres.in/api/users');
  return data;
});

const initialState = {
  data: null,
  status: 'loading',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout(state) {
      state.data = null;
      state.status = 'loading';
    },
  },
  extraReducers: {
    [fetchLogin.pending]: (state) => {
      state.data = null;
      state.status = 'loading';
    },
    [fetchLogin.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = 'loaded';
    },
    [fetchLogin.rejected]: (state) => {
      state.data = null;
      state.status = 'error';
    },
  },
});

export const loginReducer = loginSlice.reducer;
export const selectLogin = (state) => state.login;
export const logout = createAction('login/logout');
