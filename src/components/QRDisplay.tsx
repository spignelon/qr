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
    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm p-4 sm:p-8 border border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="flex flex-col items-center">
        <div className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 border border-zinc-200 dark:border-zinc-700 w-full flex justify-center">
          <img
            src={qrDataUrl}
            alt="Generated QR Code"
            className="w-64 h-64 sm:w-80 sm:h-80 object-contain max-w-full"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
          <button
            onClick={onDownload}
            className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 sm:px-6 py-3 rounded-xl font-medium transition-all duration-200 text-sm sm:text-base"
          >
            <Download className="w-4 h-4" />
            Download
          </button>

          <button
            onClick={onCopy}
            className={`flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-xl font-medium transition-all duration-200 text-sm sm:text-base ${
              isCopied
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                : 'bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700'
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
