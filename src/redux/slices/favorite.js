import { createSlice, createAction } from '@reduxjs/toolkit';

const likesId =
  localStorage.getItem('likesId') !== null ? JSON.parse(localStorage.getItem('likesId')) : [];

const initialState = {
  idList: likesId,
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.idList = [...state.idList, action.payload];
      localStorage.setItem('likesId', JSON.stringify(state.idList));
    },
    removeFromFavorite: (state, action) => {
      state.idList = state.idList.filter((id) => id !== action.payload);
      localStorage.setItem('likesId', JSON.stringify(state.idList));
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const selectFavorite = (state) => state.favorite;
export const addToFavorite = createAction('favorite/addToFavorite');
export const removeFromFavorite = createAction('favorite/removeFromFavorite');
