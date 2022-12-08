import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from "react-chartjs-2"; 

import { colorBoxSwitcher } from '../Table/ColorBox';
import css from './Chart.module.css';

ChartJS.register(ArcElement, Tooltip);



const Chart = ({ stats }) => {
  const category = stats.map(stat => stat.category);
  const amount = stats.map(stat => stat.sum);
  const color = category.map(item => colorBoxSwitcher(item));

  // console.log(color);

  const data = {
  labels: category,
  datasets: [
    {
      label: '# of Votes',
      data: amount,
      backgroundColor: color,
      borderWidth: 0,
      cutout: '70%',
    },
  ],
};

  return (
    <div className={css.container}>
      <Doughnut data={data} />
    </div>
  );
}

export default Chart;