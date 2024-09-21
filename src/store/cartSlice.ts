import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Cart } from '../../types';
import { api } from './api';

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountedTotal: number;
  thumbnail: string;
  discountPercentage: number;
}

interface CartState {
  cart: Cart | null;
  products: Product[];
  totalQuantity: number;
  totalPriceWithoutDiscount: number;
  totalPrice: number;
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  cart: null,
  products: [],
  totalQuantity: 0,
  totalPriceWithoutDiscount: 0,
  totalPrice: 0,
  loading: false,
  error: null,
};

export const fetchCart = createAsyncThunk('cart/fetchCart', 
  async (userId: number) => {
  const response = await fetch(`https://dummyjson.com/carts/user/${userId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch cart');
  }
  const data = await response.json();
  // console.log('Полученные данные о корзине:', data);
  if (!data.carts || !Array.isArray(data.carts) || data.carts.length === 0) {
    throw new Error('No carts found for the user');
  }
  return data.carts[0];
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.find(item => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += product.quantity;
        existingProduct.total = existingProduct.price * existingProduct.quantity;
        existingProduct.discountedTotal = existingProduct.price * (1 - product.discountPercentage / 100) * existingProduct.quantity;
      } else {
        state.products.push(product);
      }
      state.totalQuantity += product.quantity;
      state.totalPriceWithoutDiscount = state.products.reduce((acc, p) => acc + p.total, 0);
      state.totalPrice = state.products.reduce((acc, p) => acc + p.discountedTotal, 0);
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingProduct = state.products.find(item => item.id === id);

      if (existingProduct) {
        state.totalQuantity -= existingProduct.quantity;
        state.totalPriceWithoutDiscount -= existingProduct.total;
        state.totalPrice -= existingProduct.discountedTotal;
        state.products = state.products.filter(item => item.id !== id);
      }
    },
    clearCart: (state) => {
      state.products = [];
      state.totalQuantity = 0;
    },
    setCart: (state, action) => {
      const cartData = action.payload;
      state.products = cartData.products || [];
      state.totalQuantity = cartData.totalQuantity || 0;
      state.totalPriceWithoutDiscount = state.products.reduce((acc, p) => acc + p.total, 0);
      state.totalPrice = state.products.reduce((acc, p) => acc + p.discountedTotal, 0);
      state.cart = cartData;
    },
    setNewPrice: (state, action) => {
      state.newPrice = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        console.log('Данные о корзине:', action.payload);
        state.loading = false;
        if (action.payload && Array.isArray(action.payload.products)) {
          state.products = action.payload.products;
          state.totalQuantity = action.payload.totalQuantity;
          localStorage.setItem('cart', JSON.stringify(action.payload));
          state.cart = action.payload;
        } else {
          state.error = 'Invalid cart data received';
        }
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch cart';
      });
  },
});

export const { addToCart, removeFromCart, clearCart, setCart, setNewPrice } = cartSlice.actions;
export default cartSlice.reducer;