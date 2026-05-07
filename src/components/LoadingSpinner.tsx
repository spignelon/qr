import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm p-4 sm:p-8 border border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="flex flex-col items-center">
        <div className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 border border-dashed border-zinc-300 dark:border-zinc-600 w-full max-w-sm sm:max-w-md aspect-square flex items-center justify-center">
          <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-4 border-indigo-600 border-t-transparent"></div>
        </div>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base">Generating QR code...</p>
      </div>
    </div>
  );
};
