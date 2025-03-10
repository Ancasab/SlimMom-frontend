import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthStatus } from 'redux/auth/authSlice';
import { routes } from 'utils/routes';

export const PrivateRoute = ({ component }) => {
  const isAuth = useSelector(selectAuthStatus);

  return isAuth ? component : <Navigate to={routes.login} />;
};
