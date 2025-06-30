import React from 'react';
import type { DashboardGridProps } from '../../types';
import { GridItem } from './GridItem';
import { useQuery } from '@tanstack/react-query';
import {
  fetchLineChartData,
  fetchAreaChartData,
  fetchBarChartData,
  fetchPieChartData,
  fetchDonutChartData,
  fetchTableData
} from '../../api/endPoints';
import type { ChartData, TableDataResponse } from '../../types';

export const DashboardGrid: React.FC<DashboardGridProps> = ({ items }) => {
  const lineChartQuery = useQuery<ChartData>({
    queryKey: ['lineChart'],
    queryFn: fetchLineChartData,
  });

  const areaChartQuery = useQuery<ChartData>({
    queryKey: ['areaChart'],
    queryFn: fetchAreaChartData,
  });

  const barChartQuery = useQuery<ChartData>({
    queryKey: ['barChart'],
    queryFn: fetchBarChartData,
  });

  const pieChartQuery = useQuery<ChartData>({
    queryKey: ['pieChart'],
    queryFn: fetchPieChartData,
  });

  const donutChartQuery = useQuery<ChartData>({
    queryKey: ['donutChart'],
    queryFn: fetchDonutChartData,
  });

  const tableQuery = useQuery<TableDataResponse>({
    queryKey: ['tableData'],
    queryFn: fetchTableData,
  });

  const getQueryData = (type: 'chart' | 'table', chartType?: string) => {
    if (type === 'table') return tableQuery;
    switch (chartType) {
      case 'line': return lineChartQuery;
      case 'area': return areaChartQuery;
      case 'bar': return barChartQuery;
      case 'pie': return pieChartQuery;
      case 'donut': return donutChartQuery;
      default: return lineChartQuery;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {items.map((item) => {
        const query = getQueryData(item.type, item.chartType);
        return (
          <GridItem
            key={item.id}
            {...item}
            data={query.data}
            isLoading={query.isLoading}
            isError={query.isError}
            refetch={query.refetch}
          />
        );
      })}
    </div>
  );
};