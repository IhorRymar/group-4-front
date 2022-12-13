import instance from './auth';

export const getTransactions = async page => {
  const { data } = await instance.get(`/transactions?page=${page}`);
  return data;
};

export const getTransactionById = async id => {
  const { data } = await instance.get(`/transactions/${id}`);
  return data;
};

export const addTransaction = async transaction => {
  const { data: result } = await instance.post('/transactions', transaction);
  console.log(result);
};

export const updateTransaction = async (id, transaction) => {
  const result = await instance.put(`/transactions/${id}`, transaction);
  return result;
};

export const removeTransaction = async id => {
  const { data: result } = await instance.delete(`/transactions/${id}`);
  console.log(result);
};
