import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from './slices/login';
import { favoriteReducer } from './slices/favorite';

const store = configureStore({
  reducer: {
    login: loginReducer,
    favorite: favoriteReducer,
  },
});

export default store;
