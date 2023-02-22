import { createSlice, createAction } from '@reduxjs/toolkit';

const initialState = {
  idList: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.idList = [...state.idList, action.payload];
    },
    removeFromFavorite: (state, action) => {
      state.idList = state.idList.filter((id) => id !== action.payload);
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const selectFavorite = (state) => state.favorite;
export const addToFavorite = createAction('favorite/addToFavorite');
export const removeFromFavorite = createAction('favorite/removeFromFavorite');
