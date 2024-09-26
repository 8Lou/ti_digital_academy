import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Home from './pages/home';
import OneProduct from './pages/oneProduct';
import Undefined from './pages/404';
import MyCart from './pages/myCart';
import Login from './pages/login/login';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { selectCart } from './store/selectors';
import { jwtDecode } from 'jwt-decode';
import { useGetCurrentUserQuery } from './store/api';

function AppRoutes() {
  // const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const cart = useSelector(selectCart);
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const { data, error, isLoading } = useGetCurrentUserQuery(userId)
  const token = localStorage.getItem('token');

    useEffect(() => {
      if (!token) {
          navigate('/login');
          return;
      }

      const decodedToken = jwtDecode<{ exp: number }>(token);
      if (decodedToken.exp * 1000 < Date.now()) { //срок действия
          localStorage.removeItem('token');
          localStorage.removeItem('userId');
          navigate('/login');
          return;
      }
      if (data) {
        setCurrentUser(data);
    }
}, [data, navigate, token]);

    // useEffect(() => {
    //   const checkAuth = async () => {
    //     if (!token) {
    //       setIsLoading(false);
    //       return;
    //     }  
    //     try {
    //       const decodedToken = jwtDecode<{ exp: number }>(token);
    //       if (decodedToken.exp * 1000 < Date.now()) {
    //         localStorage.removeItem('token');
    //         localStorage.removeItem('userId');
    //         setIsLoading(false);
    //         return;
    //       }  
    //       const response = await fetch('https://dummyjson.com/auth/me', {
    //         method: 'GET',
    //         headers: {
    //           'Authorization': `Bearer ${token}`,
    //         },
    //         // credentials: 'include',
    //       });
  
    //       if (!response.ok) {
    //         throw new Error('Ошибка при получении пользователя');
    //       }
  
    //       const user = await response.json();
    //       setCurrentUser(user);
    //     } catch (error) {
    //       console.error('Ошибка при проверке авторизации:', error);
    //       localStorage.removeItem('token');
    //       localStorage.removeItem('userId');
    //     } finally {
    //       setIsLoading(false);
    //     }
    //   };
  
    //   checkAuth();
    // }, [token]);

  if (isLoading) return <div>Loading...</div>;

    return (
        <>
            <Header user={currentUser} cart={cart} />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<OneProduct />} />
                <Route path="/basket" element={<MyCart />} />
                <Route path="/undefined" element={<Undefined />} />
                <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
            <Footer />
        </>
    );
}

export default AppRoutes;
