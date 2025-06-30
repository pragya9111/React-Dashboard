import React from 'react';
import type { ChartData, GridItemProps } from '../../types';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { ErrorMessage } from '../common/ErrorMessage';
import { LineChart } from '../charts/LineChart';
import { AreaChart } from '../charts/AreaChart';
import { BarChart } from '../charts/BarChart';
import { PieChart } from '../charts/PieChart';
import { DonutChart } from '../charts/DonutChart';
import { DataTable } from '../tables/DataTable';
import { useDarkMode } from '../../context/DarkModeContext';

export const GridItem: React.FC<GridItemProps> = ({
  id,
  title,
  description,
  type,
  chartType,
  data,
  isLoading,
  isError,
  refetch,
}) => {
  const { isDarkMode } = useDarkMode();

  const renderContent = () => {
    if (isLoading) return <LoadingSpinner />;
    if (isError) return <ErrorMessage onRetry={refetch} />;
    if (!data) return <ErrorMessage message="No data available" onRetry={refetch} />;

    if (type === 'table') {
      return <DataTable data={data} title={title} />;
    }

    const chartData = data as ChartData;
    switch (chartType) {
      case 'line':
        return <LineChart data={chartData} title={title} />;
      case 'area':
        return <AreaChart data={chartData} title={title} />;
      case 'bar':
        return <BarChart data={chartData} title={title} />;
      case 'pie':
        return <PieChart data={chartData} title={title} />;
      case 'donut':
        return <DonutChart data={chartData} title={title} />;
      default:
        return <LineChart data={chartData} title={title} />;
    }
  };

  return (
    <div
      id={id}
      className={`rounded-xl shadow-lg p-4 flex flex-col h-full min-h-[350px] ${isDarkMode
        ? 'bg-gray-800 text-gray-200 border border-gray-700'
        : 'bg-white text-gray-800 border border-gray-100'
        }`}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{description}</p>
        </div>
        <button
          onClick={refetch}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          aria-label="Refresh data"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className="flex-grow flex flex-col">
        <div className="flex-grow">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};