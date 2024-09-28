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
  const [currentUser, setCurrentUser] = useState(null);
  const cart = useSelector(selectCart);
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const { data, isLoading } = useGetCurrentUserQuery(userId)
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

  if (isLoading) 
    return 
    <div>
      <div className="loader"></div>;
      <h2 className='loader__massege'>Данные устарели, перезагрузите пожалуйста страницу...</h2>
    </div>

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
