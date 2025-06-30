import React from 'react';
import type { TableData } from '../../types';
import { useDarkMode } from '../../context/DarkModeContext';

interface DataTableProps {
  data: unknown;
  title?: string;
}

export const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const { isDarkMode } = useDarkMode();
  const normalizeData = (): TableData[] => {
    if (!data) return [];

    if (Array.isArray(data) && data.length > 0 && typeof data[0] === 'object' && 'id' in data[0]) {
      return data as TableData[];
    }

    return [];
  };

  const tableData = normalizeData();

  if (tableData.length === 0) {
    return (
      <div className={`flex items-center justify-center h-full p-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
        No data available
      </div>
    );
  }

  const columns = Object.keys(tableData[0]).filter(key => key !== 'id');

  return (
    <div className="h-full flex flex-col">
      <div className={`overflow-x-auto flex-grow rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className={isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}>
            <tr>
              {columns.map((column) => (
                <th
                  key={column}
                  scope="col"
                  className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-500'
                    }`}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={`divide-y ${isDarkMode ? 'divide-gray-700 bg-gray-800' : 'divide-gray-200 bg-white'
            }`}>
            {tableData.map((row) => (
              <tr key={row.id} className={isDarkMode ? 'hover:bg-gray-750' : 'hover:bg-gray-50'}>
                {columns.map((column) => (
                  <td
                    key={`${row.id}-${column}`}
                    className={`px-4 py-3 whitespace-nowrap text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                  >
                    {row[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};