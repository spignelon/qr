import React from 'react';
import { Heart, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 sm:mt-16 text-center text-gray-500">
      <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4 text-sm sm:text-base">
        <span>Made with</span>
        <Heart className="w-4 h-4 text-red-500 fill-current" />
        <span>by</span>
        <a 
          href="https://github.com/spignelon" 
          className="hover:text-purple-600 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          @spignelon
        </a>
      </div>
      
      <div className="flex items-center justify-center gap-6 text-xs sm:text-sm">
        <a 
          href="https://github.com/spignelon/qr" 
          className="hover:text-purple-600 transition-colors duration-200 flex items-center gap-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-4 h-4" />
          Source Code
        </a>
      </div>
    </footer>
  );
};