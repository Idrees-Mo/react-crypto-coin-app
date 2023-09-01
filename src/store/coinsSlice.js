import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { COINS_URL } from "../constants";
import { StatusCodes } from "../utils/statusCodes";

// Query parameters
const queryParams = {
  vs_currency: "AUD",
  order: "market_cap_desc",
  per_page: 100,
  sparkline: false,
  locale: "en",
};
// URL with query parameters
const queryString = new URLSearchParams(queryParams).toString();
const URL = `${COINS_URL}?${queryString}`;

// Initial State
const initialState = {
  data: [],
  status: "idel",
};

// Coins Slice
const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCoins.pending, (state) => {
      state.status = StatusCodes.LOADING;
    });

    builder.addCase(getCoins.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = StatusCodes.IDLE;
    });

    builder.addCase(getCoins.rejected, (state) => {
      state.status = StatusCodes.ERROR;
    });
  },
});

// Actions
export const { fetchCoins } = coinsSlice.actions;

// Reducer
export default coinsSlice.reducer;

// Fetch coins data with thunk
export const getCoins = createAsyncThunk("coins/get", async () => {
  try {
    const response = await fetch(URL);
    debugger;
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
});
