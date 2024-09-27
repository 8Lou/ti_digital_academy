import { RootState } from './index';

export const selectCart = (state: RootState) => state.cart.cart;

export const selectProductInCart = (state: RootState, productId: number) => {
  return state.cart.cart?.products.find((product) => product.id === productId);
};

export const selectTotalCartQuantity = (state: RootState) => {
    return state.cart.cart?.totalQuantity || 0;
  };