import React from 'react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => (
  <div className="min-h-screen bg-background p-6">
    <div className="max-w-7xl mx-auto">
      <div className="bg-surface rounded-lg shadow-md p-6">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{message}</span>
          {onRetry && (
            <button
              onClick={onRetry}
              className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
            >
              Retry
            </button>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default ErrorMessage;