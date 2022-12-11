import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { getBalance } from 'redux/balance/balance-selector';
  import { fetchBalance } from 'redux/balance/balance-operation';

import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from "react-chartjs-2"; 

import { colorBoxSwitcher } from '../Table/ColorBox';
import { Container, Balance } from './Chart.styled';

ChartJS.register(ArcElement, Tooltip);

const Chart = ({ stats }) => {
  const expenses = useSelector(state => state.statistics.expenses);
  const { balance: data } = useSelector(getBalance);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBalance());
  }, [dispatch]);

  const category = expenses.map(stat => stat.categoryName);
  const amount = expenses.map(stat => stat.totalSum);
  const color = category.map(item => colorBoxSwitcher(item));

  // console.log(expenses);

  let chartData = {
  labels: category,
  datasets: [
    {
      label: 'Amount',
      data: amount,
      backgroundColor: color,
      borderWidth: 0,
      cutout: '70%',
    }]
  };

  if (expenses.length === 0) {
    chartData = {
      labels: ['none'],
      datasets: [
    {
      label: '# of Votes',
      data: [100],
      backgroundColor: ['#C9CCD5'],
      borderWidth: 0,
      cutout: '70%',
    }]
    }
  }

  return (
    <Container>
      <Doughnut data={chartData} />
      <Balance >₴ {data.balance?.toFixed(2)}</Balance>
    </Container>
  );
}

export default Chart;