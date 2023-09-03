import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
// import { BASE_URL } from "../constants";
let BASE_URL = process.env.REACT_APP_API_URL;

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [""],
  endpoints: (builder) => ({}),
});
