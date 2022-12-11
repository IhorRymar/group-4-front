import instance from './auth';

export const getTransactions = async (page) => {
  const { data} = await instance.get(`/transactions?page=${page}`);
  return data;
};


export const addTransaction = async transaction => {
  const { data: result } = await instance.post('/transactions', transaction);
  console.log(result);
};
