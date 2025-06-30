export type ChartData = {
  name: string;
  data: number[];
  categories?: string[];
};

export type TableData = {
  id: number;
  [key: string]: string | number;
};

export type TableDataResponse = TableData[];

export type GridItemProps = {
  id: string;
  title: string;
  description: string;
  type: 'chart' | 'table';
  chartType?: 'line' | 'area' | 'bar' | 'pie' | 'donut';
  data?: ChartData | TableDataResponse;
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
};

export type DashboardGridProps = {
  items: Omit<GridItemProps, 'refetch' | 'isLoading' | 'isError' | 'data'>[];
};