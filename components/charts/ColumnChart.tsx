import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ColumnChart = () => {
  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
        distributed: true,
      },
    },
    colors: ['#00E396', '#008FFB', '#FEB019', '#FF4560'],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        'Category 1',
        'Category 2',
        'Category 3',
        'Category 4',
        'Category 5',
        'Category 6',
        'Category 7',
        'Category 8',
        'Category 9',
        'Category 10',
        'Category 11',
        'Category 12',
      ],
    },
  };

  const series = [
    {
      name: 'series-1',
      data: [2, -3, 4, -1, 6, -5, 3, -4, 7, -2, 5, -3],
    },
  ];

  return <Chart height={350} options={options} series={series} type="bar" />;
};

export default ColumnChart;
