import instance from './auth';

export const getTransactions = async () => {
  const { data } = await instance.get('/transactions');
  console.log(data);
  return data;
};

export const addTransaction = async transaction => {
  const { data: result } = await instance.post('/transactions', transaction);
  console.log(result);
};
