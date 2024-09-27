import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Cart, Product } from '../../types';
import { RootState } from '../store/index';

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
    throw new Error('Ошибка при загрузке данных корзины');
  }
  const data = await response.json();
  if (!data.carts || !Array.isArray(data.carts) || data.carts.length === 0) {
    throw new Error('У Вас корзины нет пока...');
  }
  return data.carts[0];
});


export const updateCartQuantity = createAsyncThunk(
  'cart/updateCartQuantity',
  // async ({ cartId, productId, quantity }: { cartId: number; productId: number; quantity: number }) => {
  async ({ cartId, productId, quantity }: { cartId: number; productId: number, quantity: number;}, { getState }) => {

    const state = getState() as RootState;
    const products = state.cart.cart?.products ?? [];

    const response = await fetch(`https://dummyjson.com/carts/${cartId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        merge: false,
        products: products.map(product => product.id === productId ? {...product, quantity } : product),
      }),
    });

    if (!response.ok) {
      throw new Error('Ошибка при обновлении количества товара');
    }

    const data = await response.json();
    return data; // Возврат обновленной корзины
  }
);

export const addProductToCard = createAsyncThunk(
  'cart/addProductToCard',
  async ({ cartId, productId }: { cartId: number; productId: number }) => {
    const response = await fetch(`https://dummyjson.com/carts/${cartId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        merge: true,
        products: [{ id: productId, quantity: 1 }],
      }),
    });

    if (!response.ok) {
      throw new Error('Ошибка при обновлении количества товара');
    }

    const data = await response.json();
    return data; // Возврат обновленной корзины
  }
);


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
      })

      .addCase(updateCartQuantity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = {
          ...action.payload,
          products: action.payload.products.map((product: Product) => ({ ...product, discountedTotal: product.discountedPrice }))
        }
      })
      .addCase(updateCartQuantity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update cart quantity';
      })
      .addCase(addProductToCard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProductToCard.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = {
          ...action.payload,
          products: action.payload.products.map((product: Product) => ({ ...product, discountedTotal: product.discountedPrice }))
        }
      })
      .addCase(addProductToCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update cart quantity';
      });
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;