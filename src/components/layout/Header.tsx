import React from 'react';
import { ThemeToggle } from '../common/ThemeToggle';
import { useDarkMode } from '../../context/DarkModeContext';

export const Header: React.FC = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <header className={`sticky top-0 z-10 backdrop-blur-lg shadow-md ${isDarkMode
      ? 'bg-slate-900/80 border-b border-slate-700'
      : 'bg-white/80 border-b border-gray-200'
      }`}>
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className={`h-8 w-8 rounded-md ${isDarkMode ? 'bg-indigo-600' : 'bg-indigo-500'
                } flex items-center justify-center mr-3`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                AnalyticsHub
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <ThemeToggle />

            <div className="relative">
              <button className="flex items-center focus:outline-none">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-medium">
                  PB
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};