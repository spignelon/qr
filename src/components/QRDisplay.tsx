import React from 'react';
import { Download, Copy, Check } from 'lucide-react';

interface QRDisplayProps {
  qrDataUrl: string;
  onDownload: () => void;
  onCopy: () => void;
  isCopied: boolean;
}

export const QRDisplay: React.FC<QRDisplayProps> = ({ qrDataUrl, onDownload, onCopy, isCopied }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <div className="flex flex-col items-center">
        <div className="bg-gray-50 rounded-xl p-6 mb-6 border-2 border-dashed border-gray-200">
          <img
            src={qrDataUrl}
            alt="Generated QR Code"
            className="w-80 h-80 object-contain"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
          <button
            onClick={onDownload}
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
          
          <button
            onClick={onCopy}
            className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl ${
              isCopied
                ? 'bg-green-500 hover:bg-green-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300'
            }`}
          >
            {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {isCopied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
};