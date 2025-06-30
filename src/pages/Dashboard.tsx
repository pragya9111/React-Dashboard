import React from 'react';
import { DashboardGrid } from '../components/layout/DashboardGrid';
import { Header } from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Dashboard: React.FC = () => {

  const gridItems = [
    {
      id: 'line-chart-1',
      title: 'Sales Trend',
      description: 'Monthly sales trend for the current year',
      type: 'chart' as const,
      chartType: 'line' as const,
    },
    {
      id: 'area-chart-1',
      title: 'Revenue Growth',
      description: 'Quarterly revenue growth comparison',
      type: 'chart' as const,
      chartType: 'area' as const,
    },
    {
      id: 'bar-chart-1',
      title: 'Product Performance',
      description: 'Top performing products by units sold',
      type: 'chart' as const,
      chartType: 'bar' as const,
    },
    {
      id: 'pie-chart-1',
      title: 'Market Share',
      description: 'Market share by region',
      type: 'chart' as const,
      chartType: 'pie' as const,
    },
    {
      id: 'donut-chart-1',
      title: 'Customer Segmentation',
      description: 'Customer distribution by age group',
      type: 'chart' as const,
      chartType: 'donut' as const,
    },
    {
      id: 'table-1',
      title: 'Recent Orders',
      description: 'List of recent orders with details',
      type: 'table' as const,
    },
    {
      id: 'line-chart-2',
      title: 'Website Traffic',
      description: 'Daily website visitors',
      type: 'chart' as const,
      chartType: 'line' as const,
    },
    {
      id: 'bar-chart-2',
      title: 'Expense Breakdown',
      description: 'Monthly expenses by category',
      type: 'chart' as const,
      chartType: 'bar' as const,
    },
    {
      id: 'pie-chart-2',
      title: 'Device Distribution',
      description: 'User devices used to access platform',
      type: 'chart' as const,
      chartType: 'pie' as const,
    },
    {
      id: 'area-chart-2',
      title: 'Subscription Growth',
      description: 'New subscriptions over time',
      type: 'chart' as const,
      chartType: 'area' as const,
    },
    {
      id: 'donut-chart-2',
      title: 'Payment Methods',
      description: 'Preferred payment methods',
      type: 'chart' as const,
      chartType: 'donut' as const,
    },
    {
      id: 'table-2',
      title: 'Customer Feedback',
      description: 'Recent customer feedback ratings',
      type: 'table' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Header />

      <main className="max-w-8xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics Dashboard</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Monitor your business performance in real-time
          </p>
        </div>

        <DashboardGrid items={gridItems} />
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;