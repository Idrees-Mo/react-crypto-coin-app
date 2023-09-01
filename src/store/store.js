import { configureStore } from "@reduxjs/toolkit";
import coinsSlice from "./coinsSlice";

// App level store
const store = configureStore({
  reducer: {
    // reducers
    coins: coinsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: true,
});

export default store;
