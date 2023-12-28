import Container from '../Container/Container.jsx';
import LogOut from '../LogOut/LogOut.jsx';
import logo from '../../assets/icon-logo-white.svg';
import s from './Header.module.scss';

const Header = ({ onSignout }) => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.content}>
          <div className={s.wrapper}>
            <img className={s.logo} src={logo} alt="Todo logo, active checkbox" />
            <h1 className={s.title}>Список дел</h1>
          </div>
          <div className={s.wrapper}>
            <LogOut onSignout={onSignout} />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header