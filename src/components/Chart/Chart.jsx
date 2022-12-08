import { useSelector } from 'react-redux';

import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from "react-chartjs-2"; 

import { colorBoxSwitcher } from '../Table/ColorBox';
import css from './Chart.module.css';

ChartJS.register(ArcElement, Tooltip);

const Chart = ({ stats }) => {
  const expenses = useSelector(state => state.statistics.expenses);

  const category = expenses.map(stat => stat.categoryName);
  const amount = expenses.map(stat => stat.totalSum);
  const color = category.map(item => colorBoxSwitcher(item));

  // console.log(expenses);

  let data = {
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
    data = {
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
    <div className={css.container}>
      <Doughnut data={data} />
      <div className={css.balance}>₴ 20000.00</div>
    </div>
  );
}

export default Chart;