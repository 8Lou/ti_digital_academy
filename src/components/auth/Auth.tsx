import React, { useState } from 'react';
import { useLoginMutation } from '../../store/api';
import { useNavigate } from 'react-router-dom';
import './auth.css';
import usePageTitle from '../../hooks/usePageTitle';
import { jwtDecode } from 'jwt-decode';
import Layout from '../layout/Layout';

const Auth: React.FC = () => {
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

  console.log(data)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    login(JSON.stringify({
      username,
      password,
      expiresInMins: 30,
    }))
  };

  if (data?.accessToken) {
    localStorage.setItem('token', data.accessToken);

    const decodedToken = jwtDecode<{ userId: string }>(data.accessToken);
    localStorage.setItem('userId', decodedToken.userId);

    navigate('/');
  }

  return (
    <Layout>

      <div className="login-container">
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
          {error && <p className="Неверный логин или пароль"></p>}
        </form>
      </div>
    </Layout>
  );
};

export default Auth;
