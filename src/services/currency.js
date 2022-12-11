import axios from 'axios';

export const getCurrency = async () => {
  try {
    const { data } = await axios.get('https://api.monobank.ua/bank/currency');
    return data;
  } catch (error) {
    throw error;
  }
};
