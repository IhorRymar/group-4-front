import axios from 'axios';

export const currency = async () => {
  const { data } = await axios.get('https://api.monobank.ua/bank/currency');
  const arr = [];
  data.forEach(
    ({ currencyCodeA, currencyCodeB, rateBuy, rateSell, rateCross }) => {
      if (currencyCodeA === 840 && currencyCodeB === 980) {
        arr.push({
          currencyCodeA: { id: currencyCodeA, name: 'USD' },
          currencyCodeB: 'UAH',
          rateBuy,
          rateSell,
        });
      } else if (currencyCodeA === 978 && currencyCodeB === 980) {
        arr.push({
          currencyCodeA: { id: currencyCodeA, name: 'EUR' },
          currencyCodeB: 'UAH',
          rateBuy,
          rateSell,
        });
      } else if (currencyCodeA === 826 && currencyCodeB === 980) {
        arr.push({
          currencyCodeA: { id: currencyCodeA, name: 'GBP' },
          currencyCodeB: 'UAH',
          rateBuy: rateCross,
          rateSell: rateCross * 1.03,
        });
      }
    }
  );
  return arr;
};
