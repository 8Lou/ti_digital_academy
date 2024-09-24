import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import OneProduct from './pages/oneProduct';
import Undefined from './pages/404';
import MyCart from './pages/myCart';
import Login from './pages/login/login';
import { RootState } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchCart } from './store/cartSlice';
import { useGetUserQuery } from './store/api';

function AppRoutes() {
    const dispatch = useDispatch();
    // const { cart, loading, error } = useSelector((state: RootState) => state.cart);
    const [isLoading, setIsLoading] = useState(true);
    const token = localStorage.getItem('token');
  
  const { data: user, isFetching, isError } = useGetUserQuery(undefined, {
    skip: !token, // Пропустить запрос, если токена нет
  });


useEffect(() => {
    if (token) {
      dispatch(fetchCart(10)); // ID пользователя
    } else {
      // Если токена нет, редирект на страницу логина
      setIsLoading(false);
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (isFetching) {
      setIsLoading(true); // Пока идет запрос на получение пользователя
    } else {
      setIsLoading(false); // Запрос завершен
    }
  }, [isFetching]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    return <Navigate to="/login" />;
  }

    return (
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<OneProduct />} />
                <Route path="/basket" element={<MyCart />} />
                <Route path="/undefined" element={<Undefined />} />
                <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
    );
}

export default AppRoutes;
