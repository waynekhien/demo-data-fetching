import React from 'react';

interface LoadingSpinnerProps {
  color: string;
  text: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ color, text }) => (
  <div className="min-h-screen bg-background p-6">
    <div className="max-w-7xl mx-auto">
      <div className="bg-surface rounded-lg shadow-md p-6">
        <div className="flex items-center justify-center h-64">
          <div className={`animate-spin rounded-full h-12 w-12 border-b-2 border-${color}`}></div>
          <span className="ml-4 text-textSecondary text-lg">{text}</span>
        </div>
      </div>
    </div>
  </div>
);

export default LoadingSpinner;