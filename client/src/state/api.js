import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: "adminApi",
    tagTypes: [
        "User",
        "Products",
        "customers",
    ],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"],
        }),
        getProducts: build.query({
            query: () => "client/products",
            providesTags: ["Product"],
        }),
        getCustomers: build.query({
            query: () => "client/customers",
            providesTags: ["Customer"],
        }),
    }),

});

export const {
    // use is prefix and Query is posfix 
    useGetUserQuery,
    useGetProductsQuery,
    useGetCustomersQuery
} = api;