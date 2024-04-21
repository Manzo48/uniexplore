import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/userReducer';

function Register() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser({ login, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Регистрация</h2>
      <div>
        <label>login:</label>
        <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} required />
      </div>
      <div>
        <label>Пароль:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}

export default Register;
