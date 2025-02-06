export interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountedTotal?: number;
  discountedPrice?: number;
  stock?: number;
  discountPercentage: number;
  thumbnail: string;
}

export interface CartState {
  products: Product[];
  totalQuantity: number;
  cart: Cart | null;
  loading: boolean;
  error: string | null;
}

export interface Cart {
  id: number;
  products: Product[];
  totalQuantity: number;
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
}

export interface RootState {
  userId: number;
  cart: CartState;
}