import React from 'react';
import { QrCode } from 'lucide-react';

export const EmptyState: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <div className="flex flex-col items-center">
        <div className="bg-gray-50 rounded-xl p-6 mb-6 border-2 border-dashed border-gray-200 w-96 h-96 flex items-center justify-center">
          <div className="text-center">
            <QrCode className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 font-medium">Your QR code will appear here</p>
            <p className="text-gray-400 text-sm mt-2">Start typing to see the magic!</p>
          </div>
        </div>
      </div>
    </div>
  );
};