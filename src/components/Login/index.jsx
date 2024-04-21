import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/userReducer';

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ login, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Вход в систему</h2>
      <div>
        <label>login:</label>
        <input type="login" value={login} onChange={(e) => setLogin(e.target.value)} required />
      </div>
      <div>
        <label>Пароль:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Войти</button>
    </form>
  );
}

export default Login;
