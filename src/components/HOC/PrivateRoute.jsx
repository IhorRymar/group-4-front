import useAuth from '../../hooks/useAuth';
import { token } from 'redux/auth/auth-selectors';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const isLogin = useAuth();
  const location = useLocation();
  const accessToken = useSelector(token);

  if (!isLogin) {
    return <Navigate to={accessToken ? location.pathname : 'login'} />;
  }

  return <Outlet />;
};

export default PrivateRoute;
