import React, { useEffect, useState } from 'react';
import { useLoginMutation } from '../../store/api';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './auth.css';
import usePageTitle from '../../hooks/usePageTitle';
import { jwtDecode } from 'jwt-decode';
import Layout from '../layout/Layout';
import { fetchCart } from '../../store/cartSlice';

const Auth: React.FC = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, { data, isLoading, error }] = useLoginMutation();
  const navigate = useNavigate();

  usePageTitle('Sign in | Goods4you');

  // const handleSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch('https://dummyjson.com/auth/login', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json',
  //         'Access-Control-Allow-Origin' : '*'
  //        },
  //       body: JSON.stringify({
  //         username,
  //         password,
  //         expiresInMins: 30,
  //       }),
  //       // credentials: 'include',
  //     });

  //     if (!response.ok) {
  //       throw new Error('Ошибка при логине');
  //     }

  //     const data = await response.json();
  //     console.log(data);

  //     if (data.accessToken) {
  //       localStorage.setItem('token', data.accessToken);
  //     }

  //     const decodedToken = jwtDecode<{ userId: string }>(data.accessToken);
  //     localStorage.setItem('userId', decodedToken.userId);

  //     navigate('/');
  //   } catch (error) {
  //     console.error('Ошибка:', error);
  //   }
  // };

  // console.log(data)

  useEffect(() => {
    if (data?.accessToken) {
      localStorage.setItem('token', data.accessToken);
      const decodedToken = jwtDecode<{ userId: number }>(data.accessToken);
      // console.log('Decoded Token:', decodedToken);

      const userId = decodedToken.id; // Взять id из декодированного токена

      if (userId) {
        localStorage.setItem('userId', userId.toString()); // Сохр userId как строку
        dispatch(fetchCart(userId));
        navigate('/');
      } else {
        console.error('userId не найден в токене');
      }
    }
  }, [data, navigate, dispatch]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await login({ username, password, expiresInMins: 30 });
  };

  return (
    <Layout>

      <div className="login__container">
        <h2 className='auth__title'>Sign in</h2>
        <form onSubmit={handleSubmit} className='auth__form'>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder='Login'
            />
            <input className='auth__input'
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='Password'
            />
          <button type="submit" disabled={isLoading} className='auth__button'>
            {isLoading ? 'Loading...' : 'Sign in'}
          </button>
          {error && <p className="Неверный логин или пароль"></p>}
        </form>
      </div>
    </Layout>
  );
};

export default Auth;
