import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Cart } from '../../types';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    getAllCarts: builder.query<Cart[], void>({
      query: () => 'carts',
    }),
    getCartById: builder.query<Cart, number>({
      query: (cartId) => `carts/${cartId}`,
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
    updateCart: builder.mutation<Cart, { id: number; body: number }>({
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
} = cartApi;