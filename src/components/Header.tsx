import React from 'react';
import { QrCode, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  onToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark, onToggle }) => {
  return (
    <header className="relative text-center mb-6 sm:mb-8">
      <button
        onClick={onToggle}
        aria-label="Toggle dark mode"
        className="absolute top-0 right-0 p-2 rounded-xl bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400 shadow-md transition-all duration-200 hover:scale-105"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <div className="p-2 sm:p-3 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl shadow-lg">
          <QrCode className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          GoQR
        </h1>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4 leading-relaxed">
        Generate QR codes instantly. Just type or paste your text and watch the magic happen.
      </p>
    </header>
  );
};
