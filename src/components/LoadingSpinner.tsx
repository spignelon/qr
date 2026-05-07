import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-8 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
      <div className="flex flex-col items-center">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 border-2 border-dashed border-gray-200 dark:border-gray-600 w-full max-w-sm sm:max-w-md aspect-square flex items-center justify-center">
          <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-4 border-purple-500 border-t-transparent"></div>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">Generating QR code...</p>
      </div>
    </div>
  );
};
