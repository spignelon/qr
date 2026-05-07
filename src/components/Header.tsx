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
        className="absolute top-0 right-0 p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 shadow-sm transition-all duration-200"
      >
        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>

      <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <div className="p-2 sm:p-3 bg-indigo-600 rounded-xl">
          <QrCode className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 tracking-tight">
          GoQR
        </h1>
      </div>
      <p className="text-zinc-500 dark:text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto px-4 leading-relaxed">
        Generate QR codes instantly. Just type or paste your text and watch the magic happen.
      </p>
    </header>
  );
};
