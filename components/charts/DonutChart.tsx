import React from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const DonutChart = () => {
  const options: ApexOptions = {
    chart: {
      type: 'donut',
    },
    labels: ['Product A', 'Product B', 'Product C'],
    colors: ['#8C57FF', '#C5ABFF', '#F4F5FA'],
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total Sales',
              formatter: () => '100k',
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
  };

  const series = [44, 55, 41];

  return <Chart height={350} options={options} series={series} type="donut" />;
};

export default DonutChart;
