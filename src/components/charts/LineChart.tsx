import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import type { ChartData } from '../../types';
import { useDarkMode } from '../../context/DarkModeContext';

interface LineChartProps {
  data: ChartData;
  title?: string;
}

export const LineChart: React.FC<LineChartProps> = ({ data, title }) => {
  const { isDarkMode } = useDarkMode();
  const chartRef = useRef<HighchartsReact.RefObject>(null);

  useEffect(() => {
    if (chartRef.current?.chart) {
      chartRef.current.chart.update({
        chart: {
          backgroundColor: 'transparent',
          style: {
            fontFamily: 'Inter, sans-serif'
          }
        },
        title: {
          style: {
            color: isDarkMode ? '#E5E7EB' : '#1F2937',
            fontWeight: '600'
          }
        },
        xAxis: {
          labels: {
            style: {
              color: isDarkMode ? '#9CA3AF' : '#6B7280',
            },
          },
          lineColor: isDarkMode ? '#374151' : '#E5E7EB',
        },
        yAxis: {
          labels: {
            style: {
              color: isDarkMode ? '#9CA3AF' : '#6B7280',
            },
          },
          gridLineColor: isDarkMode ? '#374151' : '#F3F4F6',
        },
        legend: {
          itemStyle: {
            color: isDarkMode ? '#D1D5DB' : '#4B5563',
          },
        },
        tooltip: {
          backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF',
          borderColor: isDarkMode ? '#4B5563' : '#E5E7EB',
          style: {
            color: isDarkMode ? '#F9FAFB' : '#1F2937',
          },
        },
      });
    }
  }, [isDarkMode]);

  const options: Highcharts.Options = {
    title: {
      text: title,
      style: {
        color: isDarkMode ? '#E5E7EB' : '#1F2937',
        fontSize: '16px',
        fontWeight: '600'
      }
    },
    series: [{
      type: 'line',
      name: data.name,
      data: data.data,
      color: isDarkMode ? '#818CF8' : '#6366F1',
      marker: {
        fillColor: isDarkMode ? '#6366F1' : '#4F46E5',
      },
      lineWidth: 3,
    }],
    xAxis: {
      categories: data.categories,
      labels: {
        style: {
          color: isDarkMode ? '#9CA3AF' : '#6B7280',
        },
      },
    },
    yAxis: {
      labels: {
        style: {
          color: isDarkMode ? '#9CA3AF' : '#6B7280',
        },
      },
      gridLineWidth: 1,
    },
    chart: {
      backgroundColor: 'transparent',
      height: '80%',
      style: {
        fontFamily: 'Inter, sans-serif'
      }
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      series: {
        marker: {
          enabled: true,
          radius: 4,
          lineColor: undefined,
          lineWidth: 0
        },
        states: {
          hover: {
            enabled: true,
            lineWidthPlus: 0
          }
        }
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size: 12px; font-weight: 600">{point.key}</span><br/>',
      pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
      shared: true,
      useHTML: true,
      padding: 10,
      borderWidth: 1,
      shadow: false
    }
  };

  return (
    <div className="h-full w-full">
      <HighchartsReact highcharts={Highcharts} options={options} ref={chartRef} />
    </div>
  );
};