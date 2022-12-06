//import { ToastContainer } from "react-toastify";
//import "react-toastify/dist/ReactToastify.min.css";
import { useDispatch } from 'react-redux';
import PrivateRoute from './route/PrivateRoute';
import PublicRoute from './route/PublicRoute';
import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { current } from 'redux/auth/auth-operations';
import Header from './Header/Header';
import Spinner from './Spinner/Spinner';

const Register = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const Login = lazy(() => import('../pages/LoginPage/LoginPage.jsx'));

const Register = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const Login = lazy(() => import('../pages/LoginPage/LoginPage.jsx'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<p>...load page</p>}>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Header />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
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
    </>
  );
};
