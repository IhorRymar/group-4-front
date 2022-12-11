import instance from './auth';

export const getTransactionsCategories = async () => {
  const { data } = await instance.get('/transactions/categories');
  console.log(`services ${data}`);
  return data;
};
