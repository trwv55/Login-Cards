import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from './slices/login';

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;
