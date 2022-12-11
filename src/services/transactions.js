import instance from './auth';

export const getTransactions = async () => {
  const { data } = await instance.get('/transactions');
  // console.log(data.result);
  return data.result;
};

export const addTransaction = async transaction => {
  const { data: result } = await instance.post('/transactions', transaction);
  console.log(result);
};
