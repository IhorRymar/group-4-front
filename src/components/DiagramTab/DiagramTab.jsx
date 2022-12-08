import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpenses } from 'redux/Statistics/statistics-operations';

import Chart from '../Chart/Chart';
import Table from '../Table/Table';

import operations from '../../data/operations.json';

import css from './DiagramTab.module.css';

const DiagramTab = () => {

  return (
    <div className={css.container}>
      <div className={css.chartWrapper}>
        <h2 className={css.title}>Statistics</h2>
        <Chart stats={operations} />
      </div>
      <Table stats={operations} />
    </div>
  );
}

export default DiagramTab;