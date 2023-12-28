import { useState } from 'react';
import Auth from '../Auth/Auth.jsx';
import s from './Login.module.scss';
import fakeAuth from '../../utils/fakeAuth.js';

const Login = ({ navigate, setCurrentUser }) => {
  const [ values, setValues ] = useState({'email': '', 'password': ''});

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setValues((oldValues) =>({ ...oldValues, [name]: value }))
  }

  function handleAuthorizationUser() {
    fakeAuth.getAuthorizationUser(values)
      .then(data => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          setCurrentUser(true);

          navigate("/");
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <section className={s.login}>
      <div className={s.content}>
        <Auth btnText={'Войти'} onSubmit={handleAuthorizationUser}>
          <input
            className={s.input}
            name='email'
            type="text"
            placeholder='ваша почта'
            onChange={handleChange}
            required
          />
          <input
            className={s.input}
            name='password'
            type="password"
            placeholder='ваш пароль'
            onChange={handleChange}
            required
          />
        </Auth>
      </div>
    </section>
  )
}

export default Login;