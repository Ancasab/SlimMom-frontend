import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMedia } from 'react-use';
import { logoutUser } from 'redux/auth/authOperations';
import { selectUserName } from 'redux/auth/authSlice';
import { routes } from 'utils/routes';
import style from './UserInfo.module.scss';

export const UserInfo = () => {
  const isMobile = useMedia('(max-width: 767px)');
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={isMobile ? style.container : null}>
      <div className={style.wrapper}>
        <p className={style.active}>{userName}</p>
        <div className={style.line}></div>
        <div>
          <NavLink
            to={routes.register}
            className={style.default}
            onClick={logout}
          >
            Exit
          </NavLink>
        </div>
      </div>
    </div>
  );
};
