import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { COINS_URL } from "../constants";
import { StatusCodes } from "../utils/statusCodes";

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
  const response = await fetch(COINS_URL);
  const data = await response.json();
  return data;
});
