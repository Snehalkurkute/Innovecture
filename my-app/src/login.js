import React, { useState } from 'react';
import './styles/login.css';

const Login = ({ handleLoginIn }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUserNameChanged = (event) => setUserName(event.target.value);
  const handlePasswordChanged = (event) => setPassword(event.target.value);

  const loginButtonClicked = () => {
    if (userName === 'admin' && password === 'admin') {
      handleLoginIn(true)
    }
  }
  return (
    <div className='login-wrapper'>
      <div className='username'>
        Username<input type='text' className='inputBox' onChange={handleUserNameChanged} />
      </div>
      <div className='password'>
        Password<input type='password' className='inputBox' onChange={handlePasswordChanged} />
      </div>
      <div onClick={loginButtonClicked} className='login-button'>
        Login
      </div>
    </div>
  );
};

export default Login;
