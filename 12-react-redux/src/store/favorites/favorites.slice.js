import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const itemsSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    init: (state, action) => {
      return action.payload;
    },
    add: (state, action) => {
      const item = action.payload;
      return [...state, item.id];
    },
    remove: (state, action) => {
        const filtered = state.filter((id) => id !== action.payload.id);
        return filtered;
    }
  }
});

export const actions = itemsSlice.actions;
export const reducer = itemsSlice.reducer;

export default itemsSlice;