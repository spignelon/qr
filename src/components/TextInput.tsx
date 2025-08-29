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
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-purple-100 rounded-lg">
          <Type className="w-5 h-5 text-purple-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">Enter Your Text</h2>
      </div>
      
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full h-32 p-4 border-2 border-gray-200 rounded-xl resize-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-200 text-gray-700 placeholder-gray-400"
          maxLength={maxCharacters}
        />
        
        <div className="flex justify-between items-center mt-3">
          <div className="text-sm text-gray-500">
            Start typing to generate your QR code instantly
          </div>
          <div className={`text-sm font-medium ${
            characterCount > maxCharacters * 0.9 
              ? 'text-red-500' 
              : characterCount > maxCharacters * 0.7 
                ? 'text-yellow-500' 
                : 'text-gray-500'
          }`}>
            {characterCount}/{maxCharacters}
          </div>
        </div>
      </div>
    </div>
  );
};