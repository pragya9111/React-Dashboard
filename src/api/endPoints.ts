import type { ChartData, TableDataResponse } from '../types';

// Mock data for development
const mockLineChartData: ChartData = {
  name: 'Sales Trend',
  data: [120, 200, 150, 170, 180, 190, 210, 220, 190, 200, 230, 260],
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
};

const mockAreaChartData: ChartData = {
  name: 'Revenue Growth',
  data: [5000, 7000, 8500, 9200, 10500, 12000, 14000, 16000, 15000, 17000, 18000, 20000],
  categories: ['Q1', 'Q2', 'Q3', 'Q4']
};

const mockBarChartData: ChartData = {
  name: 'Product Performance',
  data: [45, 78, 56, 32, 89, 76, 65],
  categories: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E', 'Product F', 'Product G']
};

const mockPieChartData: ChartData = {
  name: 'Market Share',
  data: [35, 25, 20, 15, 5],
  categories: ['North America', 'Europe', 'Asia', 'South America', 'Africa']
};

const mockDonutChartData: ChartData = {
  name: 'Customer Segmentation',
  data: [35, 25, 20, 20],
  categories: ['18-25', '26-35', '36-45', '46+']
};

const mockTableData: TableDataResponse = [
  { id: 1, product: "Premium Widget", category: "Electronics", sales: 120, revenue: 2400, region: "North" },
  { id: 2, product: "Basic Gadget", category: "Electronics", sales: 95, revenue: 1900, region: "South" },
  { id: 3, product: "Deluxe Gizmo", category: "Home", sales: 200, revenue: 4000, region: "East" },
  { id: 4, product: "Standard Thing", category: "Office", sales: 75, revenue: 1500, region: "West" },
  { id: 5, product: "Luxury Item", category: "Lifestyle", sales: 150, revenue: 3000, region: "Central" },
  { id: 6, product: "Essential Tool", category: "Tools", sales: 180, revenue: 3600, region: "North" }
];

// Export API functions
export const fetchLineChartData = async (): Promise<ChartData> => {
  return mockLineChartData;
};

export const fetchAreaChartData = async (): Promise<ChartData> => {
  return mockAreaChartData;
};

export const fetchBarChartData = async (): Promise<ChartData> => {
  return mockBarChartData;
};

export const fetchPieChartData = async (): Promise<ChartData> => {
  return mockPieChartData;
};

export const fetchDonutChartData = async (): Promise<ChartData> => {
  return mockDonutChartData;
};

export const fetchTableData = async (): Promise<TableDataResponse> => {
  return mockTableData;
};