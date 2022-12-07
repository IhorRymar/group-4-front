import { useSelector } from 'react-redux';

import { isAuth } from '../redux/auth/auth-selectors';

const useAuthh = () => {
  const result = useSelector(isAuth);

  return result;
};

export default useAuthh;
