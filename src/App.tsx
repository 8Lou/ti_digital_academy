import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import OneProduct from './pages/oneProduct';
import Undefined from './pages/404';
import MyCart from './pages/myCart';
import { RootState } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCart } from './store/cartSlice';

function App() {
  
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);

  useEffect(() => {
    if (!cart) {
      dispatch(fetchCart(33));// ID пользователя
    }
  }, [dispatch, cart]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product/:id" element={<OneProduct />} />
        <Route path="/basket" element={<MyCart />} />
        <Route path="/undefined" element={<Undefined />} />
      </Routes>
    </Router>
  );
}

export default App;