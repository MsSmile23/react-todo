import { ReactComponent as LogoutSVG } from '../../assets/icon-logout.svg';
import s from './LogOut.module.scss';

const LogOut = ({ onSignout }) => {

  const handleLogOut = () => {
    onSignout();
  }

  return (
    <button
      className={s.logout}
      onClick={handleLogOut}>
      <LogoutSVG />
    </button>
  )
}

export default LogOut