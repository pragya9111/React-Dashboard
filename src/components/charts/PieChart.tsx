import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import type { ChartData } from '../../types';
import { useDarkMode } from '../../context/DarkModeContext';

interface PieChartProps {
  data: ChartData;
  title?: string;
}

export const PieChart: React.FC<PieChartProps> = ({ data, title }) => {
   const { isDarkMode } = useDarkMode();
  const chartRef = useRef<HighchartsReact.RefObject>(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.chart.update({
        chart: {
          backgroundColor: 'transparent',
        },
        title: {
          style: {
            color: isDarkMode ? '#E5E7EB' : '#111827',
          },
        },
        legend: {
          itemStyle: {
            color: isDarkMode ? '#E5E7EB' : '#111827',
          },
        },
      });
    }
  }, [isDarkMode]);

  const pieData = data.categories?.map((category, index) => ({
    name: category,
    y: data.data[index]
  }));

  const options: Highcharts.Options = {
    title: {
      text: title,
      style: {
        color: isDarkMode ? '#E5E7EB' : '#111827',
        fontSize: '16px',
        fontWeight: 'bold'
      }
    },
    series: [{
      type: 'pie',
      name: data.name,
      data: pieData,
    }],
    chart: {
      backgroundColor: 'transparent',
      height: '80%'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color: isDarkMode ? '#E5E7EB' : '#111827',
          }
        }
      }
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.y}</b>'
    },
    credits: {
      enabled: false,
    },
  };

  return (
    <div className="h-full w-full">
      <HighchartsReact highcharts={Highcharts} options={options} ref={chartRef} />
    </div>
  );
};