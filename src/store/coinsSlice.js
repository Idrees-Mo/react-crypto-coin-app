import { createSlice } from "@reduxjs/toolkit";

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
  const URL =
    "/api/v3/coins/markets?vs_currency=AUD&order=market_cap_desc&per_page=100&sparkline=false&locale=en";
  return async function fetchCoinsThunk(dispatch, getState) {
    const response = await fetch(URL);
    const data = await response.json();
    dispatch(fetchCoins(data));
  };
}
