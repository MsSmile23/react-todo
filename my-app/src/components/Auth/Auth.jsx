import { Link, useLocation } from 'react-router-dom';
import s from './Auth.module.scss';
import cn from 'classnames';

const AuthForm = ({children, btnText, onSubmit}) => {
  const { pathname } = useLocation();

  const handleSubmitForm = (e) => {
    e.preventDefault();

    onSubmit();
  }

  return (
    <form className={s.form} onSubmit={handleSubmitForm}>
      <h2 className={s.title}>Список дел</h2>

      <div className={s.wrapper}>
        <Link to="/signin" className={cn(s.link, (pathname === "/signin" ? s.link_active : ''))}>
          Войти
        </Link>
        <Link to="/signup" className={cn(s.link, (pathname === "/signup" ? s.link_active : ''))}>
          Регистрация
        </Link>
      </div>

      {children}

      <div className={s.info}>
        <p>Это ложная форма. Можете не переживать, она никуда ничего не отправляет</p>

        <p>Для того, чтобы воспользоваться приложением, зарегестрируйтесь или просто введите пароль: example@example.com 12345678</p>
      </div>

      <button className={cn(s.btn, s.btn_type_submit)}>{btnText}</button>
    </form>
  )
}

export default AuthForm