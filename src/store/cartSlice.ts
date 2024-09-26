import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Cart } from '../../types';

interface CartState {
  cart: Cart | null;
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  cart: null,
  loading: false,
  error: null,
};

export const fetchCart = createAsyncThunk('cart/fetchCart', async (userId: number) => {
  const response = await fetch(`https://dummyjson.com/carts/user/${userId}`, {
  // credentials: 'include',
});
  if (!response.ok) {
    throw new Error('Failed to fetch cart');
  }
  const data = await response.json();
  if (!data.carts || !Array.isArray(data.carts) || data.carts.length === 0) {
    throw new Error('У Вас корзины нет пока...');
  }
  return data.carts[0];
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cart = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch cart';
      });
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;