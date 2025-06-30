import React from 'react';

interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message = 'Failed to load data',
  onRetry
}) => (
  <div className="flex flex-col items-center justify-center h-full p-4 text-red-500">
    <p>{message}</p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="mt-2 px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition"
      >
        Retry
      </button>
    )}
  </div>
);