import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import { api } from './api';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;