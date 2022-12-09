import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useDispatch } from 'react-redux';
import PrivateRoute from './route/PrivateRoute';
import PublicRoute from './route/PublicRoute';
import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { current } from 'redux/auth/auth-operations';
import Header from './Header/Header';
import HomeTab from './HomeTab/HomeTab';

const Register = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const Login = lazy(() => import('../pages/LoginPage/LoginPage.jsx'));
// const Statistics = lazy(() => import('../pages/StatsPage/StatsPage'));


export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Suspense fallback={<p>...load page</p>}>
        <Routes>
          <Route element={<PrivateRoute />}>
             <Route path="/" element={<HomeTab />} />
             {/* <Route path="/statistics" element={<Statistics />} /> */}
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
