import React from 'react'
import { useDarkMode } from '../../context/DarkModeContext'

const Footer: React.FC = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <footer className={`py-6 ${isDarkMode ? 'bg-slate-900' : 'bg-stone-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <div className={`h-6 w-6 rounded-md ${isDarkMode ? 'bg-indigo-600' : 'bg-indigo-500'
                } flex items-center justify-center mr-2`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <p className={`text-sm ${isDarkMode ? 'bg-slate-900 text-stone-100' : 'bg-stone-100 text-gray-600'}`}>
                AnalyticsHub • Modern Business Intelligence
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer