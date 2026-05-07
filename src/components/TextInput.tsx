import React from 'react';
import { Type } from 'lucide-react';

interface TextInputProps {
  text: string;
  onChange: (text: string) => void;
  placeholder?: string;
}

export const TextInput: React.FC<TextInputProps> = ({ text, onChange, placeholder = "Enter text to generate QR code..." }) => {
  const characterCount = text.length;
  const maxCharacters = 2000;

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm p-4 sm:p-6 border border-zinc-200 dark:border-zinc-800 mb-6 sm:mb-8 transition-colors duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
          <Type className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h2 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-100">Enter Your Text</h2>
      </div>

      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full h-28 sm:h-32 p-3 sm:p-4 border border-zinc-200 dark:border-zinc-700 rounded-xl resize-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200 text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 dark:placeholder-zinc-500 bg-white dark:bg-zinc-800 text-sm sm:text-base outline-none"
          maxLength={maxCharacters}
        />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 gap-2 sm:gap-0">
          <div className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-500">
            Start typing to generate your QR code instantly
          </div>
          <div className={`text-xs sm:text-sm font-medium ${
            characterCount > maxCharacters * 0.9
              ? 'text-red-500'
              : characterCount > maxCharacters * 0.7
                ? 'text-amber-500'
                : 'text-zinc-400 dark:text-zinc-500'
          }`}>
            {characterCount}/{maxCharacters}
          </div>
        </div>
      </div>
    </div>
  );
};
