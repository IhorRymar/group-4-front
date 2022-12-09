import instance from './auth'

export const getTransactions = async () => {
    const { data} = await instance.get('/transactions');
    console.log(data)
  return data;
};