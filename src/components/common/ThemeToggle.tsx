import React, { useEffect, useState } from 'react';
import { useDarkMode } from '../../context/DarkModeContext';

export const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    toggleDarkMode();
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 600);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <button
      onClick={handleToggle}
      className={`relative w-13 h-7 rounded-full p-1 transition-colors duration-500 ${isDarkMode ? 'bg-violet-950' : 'bg-gray-300'
        }`}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-full h-full">
        {/* Sun */}
        <div className={`absolute inset-0 flex items-center justify-self-end mr-0.5 transition-all duration-500 ${isDarkMode ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
          }`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Moon */}
        <div className={`absolute inset-0 flex items-center justify-self-start ml-0.5 transition-all duration-500 ${isDarkMode ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </div>

        {/* Animated circle */}
        <div className={`absolute top-0 w-5 h-5 rounded-full bg-white shadow-lg transform transition-transform duration-500 ease-in-out ${isDarkMode ? 'translate-x-6' : 'translate-x-0'
          } ${isAnimating ? 'scale-110' : 'scale-100'
          }`}></div>
      </div>
    </button>
  );
};