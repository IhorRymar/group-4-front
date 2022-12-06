import Chart from '../Chart/Chart';
import Table from '../Table/Table';

import operations from '../../data/operations.json';

import css from './DiagramTab.module.css';

const DiagramTab = () => {

  return (
    <div className={css.container}>
      <div className={css.chartWrapper}>
        <h2 className={css.title}>Statistics</h2>
        <Chart />
      </div>
      <Table items={operations} />
    </div>
  );
}

export default DiagramTab;