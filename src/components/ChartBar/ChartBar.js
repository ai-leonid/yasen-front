import React from 'react';
import merge from 'lodash/merge';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const optionsChartDefault = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: '',
    },
  },
  aspectRatio: 2.8,
};

export function ChartBar({
  style, className, options = {}, data
}) {
  const classes = [className, 'chart-bar'];

  const optionsChart = merge(optionsChartDefault, options);

  return (
    <Bar className={classes.join(' ')} style={style} options={optionsChart} data={data} />
  );
}
