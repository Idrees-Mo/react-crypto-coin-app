import { COINS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const coinsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: () => ({
        url: COINS_URL,
        params: {
          vs_currency: "AUD",
          order: "market_cap_desc",
          per_page: 100,
          sparkline: false,
          locale: "en",
        },
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Coins"],
    }),
  }),
});

export const { useGetCoinsQuery } = coinsApiSlice;
