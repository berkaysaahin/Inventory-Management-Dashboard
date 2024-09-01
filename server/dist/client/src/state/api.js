"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetExpensesByCategoryQuery = exports.useGetUsersQuery = exports.useCreateProductMutation = exports.useGetProductsQuery = exports.useGetDashboardMetricsQuery = exports.api = void 0;
const react_1 = require("@reduxjs/toolkit/query/react");
exports.api = (0, react_1.createApi)({
    baseQuery: (0, react_1.fetchBaseQuery)({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
    reducerPath: 'api',
    tagTypes: ['DashboardMetrics', 'Products', 'Users', 'Expenses'],
    endpoints: (build) => ({
        getDashboardMetrics: build.query({
            query: () => '/dashboard',
            providesTags: ['DashboardMetrics']
        }),
        getProducts: build.query({
            query: (search) => ({
                url: '/products',
                params: search ? { search } : {}
            }),
            providesTags: ['Products']
        }),
        createProduct: build.mutation({
            query: (newProduct) => ({
                url: '/products',
                method: 'POST',
                body: newProduct
            }),
            invalidatesTags: ['Products']
        }),
        getUsers: build.query({
            query: () => '/users',
            providesTags: ['Users']
        }),
        getExpensesByCategory: build.query({
            query: () => '/expenses',
            providesTags: ['Expenses']
        }),
    }),
});
exports.useGetDashboardMetricsQuery = exports.api.useGetDashboardMetricsQuery, exports.useGetProductsQuery = exports.api.useGetProductsQuery, exports.useCreateProductMutation = exports.api.useCreateProductMutation, exports.useGetUsersQuery = exports.api.useGetUsersQuery, exports.useGetExpensesByCategoryQuery = exports.api.useGetExpensesByCategoryQuery;
