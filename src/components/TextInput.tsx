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
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-100 dark:border-gray-700 mb-6 sm:mb-8 transition-colors duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
          <Type className="w-5 h-5 text-purple-600 dark:text-purple-400" />
        </div>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">Enter Your Text</h2>
      </div>

      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full h-28 sm:h-32 p-3 sm:p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl resize-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-200 text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-700 text-sm sm:text-base"
          maxLength={maxCharacters}
        />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 gap-2 sm:gap-0">
          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            Start typing to generate your QR code instantly
          </div>
          <div className={`text-xs sm:text-sm font-medium ${
            characterCount > maxCharacters * 0.9
              ? 'text-red-500'
              : characterCount > maxCharacters * 0.7
                ? 'text-yellow-500'
                : 'text-gray-500 dark:text-gray-400'
          }`}>
            {characterCount}/{maxCharacters}
          </div>
        </div>
      </div>
    </div>
  );
};
