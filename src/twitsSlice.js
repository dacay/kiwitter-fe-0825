import { createSlice } from '@reduxjs/toolkit';

const twitsSlice = createSlice({
  name: 'twits',
  initialState: {
    twits: [],
  },
  reducers: {
    loadTwits: (state, action) => {

      state.twits = action.payload.sort((a, b) => b.createDate - a.createDate);
    },
    addTwit: (state, action) => {

      const twits = [...state.twits, action.payload];

      state.twits = twits.sort((a, b) => b.createDate - a.createDate);
    },
  },
});

export const selectTwits = (state) => state.twits.twits;

export const { loadTwits, addTwit } = twitsSlice.actions;

export default twitsSlice.reducer;