import { COINS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const coinsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: () => ({
        url: COINS_URL + "markets",
        params: {
          vs_currency: "AUD",
          order: "market_cap_desc",
          per_page: 100,
          sparkline: false,
          locale: "en",
        },
      }),
    }),

    getCoinDetails: builder.query({
      query: (coinId) => ({
        url: COINS_URL + `/${coinId}`,
      }),
    }),
  }),
});

export const { useGetCoinsQuery, useGetCoinDetailsQuery } = coinsApiSlice;
