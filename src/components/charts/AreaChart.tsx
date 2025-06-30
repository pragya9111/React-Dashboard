import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import type { ChartData } from '../../types';
import { useDarkMode } from '../../context/DarkModeContext';

interface AreaChartProps {
  data: ChartData;
  title?: string;
}

export const AreaChart: React.FC<AreaChartProps> = ({ data, title }) => {
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
        xAxis: {
          labels: {
            style: {
              color: isDarkMode ? '#E5E7EB' : '#111827',
            },
          },
        },
        yAxis: {
          labels: {
            style: {
              color: isDarkMode ? '#E5E7EB' : '#111827',
            },
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
      type: 'area',
      name: data.name,
      data: data.data,
    }],
    xAxis: {
      categories: data.categories,
      labels: {
        style: {
          color: isDarkMode ? '#E5E7EB' : '#111827',
        },
      },
    },
    yAxis: {
      labels: {
        style: {
          color: isDarkMode ? '#E5E7EB' : '#111827',
        },
      },
    },
    chart: {
      backgroundColor: 'transparent',
      height: '80%'
    },
    plotOptions: {
      area: {
        fillOpacity: 0.5
      }
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