import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './HOC/PrivateRoute';
import PublicRoute from './HOC/PublicRoute';
import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { current } from 'redux/auth/auth-operations';
import { global } from '../redux/global/global-selectors';
import { isAuth } from '../redux/auth/auth-selectors';
import Header from './Header/Header';
// import HomeTab from './HomeTab/HomeTab';
import Spinner from './Spinner/Spinner';
import { Currency } from './Currency/Currency';
import DiagramTab from './DiagramTab/DiagramTab';
const Register = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const Login = lazy(() => import('../pages/LoginPage/LoginPage.jsx'));
const Home = lazy(() => import('../pages/HomePage/HomePage'));
// const Statistics = lazy(() => import('../pages/StatsPage/StatsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(global);
  const isLogin = useSelector(isAuth);

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        {loading && <Spinner />}
        {isLogin && <Header />}
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route
              index
              element={
                <div>
                  <Currency />
                </div>
              }
            />
            <Route
              path="/diagram"
              element={
                <div>
                  <Currency />
                  <DiagramTab />
                </div>
              }
            />
            <Route path="/currency" element={<Currency />} />
            <Route
              path="*"
              element={
                <main style={{ padding: '1rem' }}>
                  <span>There's nothing here!</span>
                  <br />
                  <span>
                    <Link to={'/'}>Return</Link>
                  </span>
                </main>
              }
            />
            {/* <Route path="/statistics" element={<Statistics />} /> */}
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
                  <Link to={'/'}>Return</Link>
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
