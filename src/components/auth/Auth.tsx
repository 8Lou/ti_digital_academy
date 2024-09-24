import React, { useEffect, useState } from 'react';
import { useLoginMutation } from '../../store/api';
import { useNavigate } from 'react-router-dom';
import './auth.css';
import usePageTitle from '../../hooks/usePageTitle';

const Auth: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading, error }] = useLoginMutation();
  const navigate = useNavigate();

  usePageTitle('Sign in | Goods4you');
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/home');
    }
  }, [navigate]);
  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await login({ username, password }).unwrap();
      localStorage.setItem('token', response.token);
      navigate('/home');
    } catch (err) {
      console.error('Login failed:', err);
    }
  };


  return (
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
        {error && <p className="Неверный логин или пароль">{error.message}</p>}
      </form>
    </div>
  );
};

export default Auth;
