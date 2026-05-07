import React from 'react';
import { QrCode } from 'lucide-react';

export const EmptyState: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-8 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
      <div className="flex flex-col items-center">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 border-2 border-dashed border-gray-200 dark:border-gray-600 w-full max-w-sm sm:max-w-md aspect-square flex items-center justify-center">
          <div className="text-center">
            <QrCode className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 dark:text-gray-600 mx-auto mb-3 sm:mb-4" />
            <p className="text-gray-500 dark:text-gray-400 font-medium text-sm sm:text-base">Your QR code will appear here</p>
            <p className="text-gray-400 dark:text-gray-500 text-xs sm:text-sm mt-2">Start typing to see the magic!</p>
          </div>
        </div>
      </div>
    </div>
  );
};
