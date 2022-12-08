import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useDispatch } from 'react-redux';
//import { ToastContainer } from "react-toastify";
//import "react-toastify/dist/ReactToastify.min.css";
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './route/PrivateRoute';
import PublicRoute from './route/PublicRoute';
import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import { current } from 'redux/auth/auth-operations';
import { global } from '../redux/global/global-selectors';
import Header from './Header/Header';
import Spinner from './Spinner/Spinner';

const Register = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const Login = lazy(() => import('../pages/LoginPage/LoginPage.jsx'));
const Statistics = lazy(() => import('../pages/StatsPage/StatsPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  const loading = useSelector(global);

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<p>...load page</p>}>
      <Suspense fallback={<Spinner />}>
        {loading && <Spinner />}
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Header />} />
            <Route path="/" element={<Header />} />
            {/* <Route path="/" element={<Header />} /> */}
            <Route path="/" element={<Statistics />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
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
