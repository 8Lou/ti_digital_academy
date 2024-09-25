import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Cart } from '../../types';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://dummyjson.com',
  
  credentials: 'include', // куки для всех запросов

  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery,
  endpoints: (builder) => ({

    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    
    getCurrentUser: builder.query({
      query: () => '/user/me',
    }),

    getAllCarts: builder.query<Cart[], void>({
      query: () => '/carts',
    }),
    getCartById: builder.query<Cart, number>({
      query: (cartId) => `/carts/${cartId}`,
    }),
    getCartsByUser: builder.query<Cart, number>({
      query: (userId) => `carts/user/${userId}`,
    }),
    addCart: builder.mutation<Cart, number>({
      query: (body) => ({
        url: 'carts/add',
        method: 'POST',
        body,
      }),
    }),
    updateCart: builder.mutation<Cart, { id: number; body: Partial<Cart> }>({
      query: ({ id, body }) => ({
        url: `carts/${id}`,
        method: 'PUT',
        body,
      }),
    }),
    deleteCart: builder.mutation<Cart, number>({
      query: (id) => ({
        url: `carts/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetCartsByUserQuery,
  useGetAllCartsQuery,
  useGetCartByIdQuery,
  useAddCartMutation,
  useUpdateCartMutation,
  useDeleteCartMutation,
  useLoginMutation,
  useGetCurrentUserQuery,
} = cartApi;
