import { createSlice } from "@reduxjs/toolkit";

import { COINS_URL } from "../constants";

// Initial State
const initialState = {
  data: [],
};

// Coins Slice
const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    fetchCoins(state, action) {
      state.data = action.payload;
    },
  },
});

// Actions
export const { fetchCoins } = coinsSlice.actions;

// Reducer
export default coinsSlice.reducer;

// Get coins async
export function getCoins() {
  return async function fetchCoinsThunk(dispatch, getState) {
    const response = await fetch(COINS_URL);
    const data = await response.json();
    dispatch(fetchCoins(data));
  };
}
