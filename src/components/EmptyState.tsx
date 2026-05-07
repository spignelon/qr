import React from 'react';
import { QrCode } from 'lucide-react';

export const EmptyState: React.FC = () => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm p-4 sm:p-8 border border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="flex flex-col items-center">
        <div className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 border border-dashed border-zinc-300 dark:border-zinc-600 w-full max-w-sm sm:max-w-md aspect-square flex items-center justify-center">
          <div className="text-center">
            <QrCode className="w-12 h-12 sm:w-16 sm:h-16 text-zinc-300 dark:text-zinc-600 mx-auto mb-3 sm:mb-4" />
            <p className="text-zinc-500 dark:text-zinc-400 font-medium text-sm sm:text-base">Your QR code will appear here</p>
            <p className="text-zinc-400 dark:text-zinc-500 text-xs sm:text-sm mt-2">Start typing to see the magic!</p>
          </div>
        </div>
      </div>
    </div>
  );
};
