import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: "adminApi",
    tagTypes: [
        "User",
        "Products",
        "customers",
        "Transactions",
        "Geography",
        "Sales",
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
        getTransactions: build.query({
            query: ({ page, pageSize, sort, search }) => ({
                url: "client/transactions",
                method: "GET",
                params: { page, pageSize, sort, search },
            }),
            providesTags: ["Transactions"],
        }),
        getGeography : build.query({
            query: ()=> "client/geography",
            providesTags: ["Geography"],
        }),
        getSales : build.query({
            query: () => "sales/sales",
            providesTags: ["Sales"],
        }),
    }),

});

export const {
    // use is prefix and Query is posfix 
    useGetUserQuery,
    useGetProductsQuery,
    useGetCustomersQuery,
    useGetTransactionsQuery,
    useGetGeographyQuery,
    useGetSalesQuery,
} = api;