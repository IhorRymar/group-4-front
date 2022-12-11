import instance from './auth';

export const getBalance = async () => {
  try {
    const { data } = await instance.get('/transactions/balance');
    return data;
  } catch (error) {
    throw error;
  }
};
