import axios from 'axios';

const instance = axios.create({
  //baseURL: 'https://connections-api.herokuapp.com',
  baseURL: 'https://wallet-backend.cyclic.app/api',
});

//AUTHORIZATION API:

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.authorization = '';
};
export const signup = async data => {
  const { data: result } = await instance.post('/users/signup', data);
  setToken(result.accessToken);
  return result;
};

export const login = async data => {
  const { data: result } = await instance.post('/users/signin', data);
  setToken(result.accessToken);
  return result;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

// STATISTICS API:

export const getStatistics = async (data) => {
  const { data: result } = await instance.post('/transactions/statistics', data);
  return result;
}

export default instance;
