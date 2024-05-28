import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/products",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "get-all",
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
