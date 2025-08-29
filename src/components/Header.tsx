import React from 'react';
import { QrCode } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl shadow-lg">
          <QrCode className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          GoQR
        </h1>
      </div>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto px-4">
        Generate QR codes instantly. Just type or paste your text and watch the magic happen.
      </p>
    </header>
  );
};