import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { fetchBalance } from 'redux/balance/balance-operation';

import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from "react-chartjs-2"; 

import { colorBoxSwitcher } from '../Table/ColorBox';
import { Container, Balance } from './Chart.styled';

ChartJS.register(ArcElement, Tooltip);

const Chart = ({ stats }) => {
  const expenses = useSelector(state => state.statistics.expenses);
  const balance = useSelector(state => state.balance.balance);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBalance());
  }, [dispatch]);

  const category = expenses.map(stat => stat.category);
  const categoryName = expenses.map(stat => stat.categoryName);
  const amount = expenses.map(stat => stat.totalSum);
  const color = category.map(item => colorBoxSwitcher(item));

  let chartData = {
  labels: categoryName,
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
      label: 'Amount',
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
      <Balance >₴ {(balance === 0) ? '0.00' : balance.balance.toFixed(2)}</Balance>
    </Container>
  );
}

export default Chart;