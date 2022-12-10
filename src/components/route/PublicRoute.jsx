import useAuth from '../../hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const isLogin = useAuth();

  if (isLogin) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default PublicRoute;
