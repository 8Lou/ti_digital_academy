import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Cart, Product } from '../../types';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://dummyjson.com',
  
  // credentials: 'include', // куки для всех запросов

  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const api = createApi({
  reducerPath: 'cartApi',
  baseQuery,
  endpoints: (builder) => ({

    login: builder.mutation({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
          'Access-Control-Allow-Origin' : '*'
         },
        body,
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

    updateCart: builder.mutation<Cart, { id: number; body: Partial<Cart> }>({
      query: ({ id, body }) => ({
        url: `carts/${id}`,
        method: 'PUT',
        body,
      }),
    }),
      getProductById: builder.query<Product, number>({
        query: (id) => `/products/${id}`,
      }),
      
  }),
});

export const {
  useGetCartsByUserQuery,
  useGetAllCartsQuery,
  useGetCartByIdQuery,
  useUpdateCartMutation,
  useLoginMutation,
  useGetCurrentUserQuery,
  useGetProductByIdQuery,
} = api;
