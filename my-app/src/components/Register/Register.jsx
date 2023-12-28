import { useState } from 'react';
import Auth from '../Auth/Auth.jsx';
import s from './Register.module.scss';
import fakeAuth from '../../utils/fakeAuth.js';

const Register = ({ navigate, setCurrentUser }) => {
  const [ values, setValues ] = useState({'name': '', 'email': '', 'password': ''});

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setValues((oldValues) =>({ ...oldValues, [name]: value }))
  }


  function handleRegistrationUser() {
    fakeAuth.getRegistrationUser(values)
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
    <section className={s.register}>
      <div className={s.content}>
        <Auth btnText={'Зарегистрироваться'} onSubmit={handleRegistrationUser}>
          <input
            className={s.input}
            name='name'
            type="text"
            placeholder='ваше имя'
            onChange={handleChange}
            required
          />
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

export default Register