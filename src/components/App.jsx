import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './HOC/PrivateRoute';
import PublicRoute from './HOC/PublicRoute';
import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { current } from 'redux/auth/auth-operations';
import { global, logoutModal } from '../redux/global/global-selectors';
import { isAuth } from '../redux/auth/auth-selectors';
import { ModalLogout } from 'components/ModalLogout/ModalLogout';
import Header from './Header/Header';
import Spinner from './Spinner/Spinner';

const Register = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const Login = lazy(() => import('../pages/LoginPage/LoginPage.jsx'));
const Dashboard = lazy(() => import('../pages/DashboardPage/DashboardPage'));
const HomeTab = lazy(() => import('./HomeTab/HomeTab'));
const DiagramTab = lazy(() => import('./DiagramTab/DiagramTab'));
const Currency = lazy(() => import('./Currency/Currency'));

export const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(global);
  const isLogin = useSelector(isAuth);
  const logout = useSelector(logoutModal);

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        {loading && <Spinner />}
        {isLogin && <Header />}
        {logout && <ModalLogout />}
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Dashboard />}>
              <Route path="home" element={<HomeTab />} />
              <Route path="statistics" element={<DiagramTab />} />
              <Route path="currency" element={<Currency />} />
            </Route>
            <Route
              path="*"
              element={
                <main style={{ padding: '1rem' }}>
                  <span>There's nothing here!</span>
                  <br />
                  <span>
                    <Link to={'/home'}>Return</Link>
                  </span>
                </main>
              }
            />
          </Route>

          <Route element={<PublicRoute />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <span>There's nothing here!</span>
                <br />
                <span>
                  <Link to={'/home'}>Return</Link>
                </span>
              </main>
            }
          />
        </Routes>
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
