import React, { useState } from 'react';
import { Header } from './components/Header';
import { TextInput } from './components/TextInput';
import { QRDisplay } from './components/QRDisplay';
import { LoadingSpinner } from './components/LoadingSpinner';
import { EmptyState } from './components/EmptyState';
import { Footer } from './components/Footer';
import { FeatureCards } from './components/FeatureCards';
import { useQRGenerator } from './hooks/useQRGenerator';
import { downloadImage, copyImageToClipboard } from './utils/fileUtils';

function App() {
  const [text, setText] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const { qrDataUrl, isGenerating } = useQRGenerator(text);

  const handleDownload = () => {
    if (qrDataUrl) {
      const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
      downloadImage(qrDataUrl, `goqr-${timestamp}.png`);
    }
  };

  const handleCopy = async () => {
    if (qrDataUrl) {
      const success = await copyImageToClipboard(qrDataUrl);
      if (success) {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      }
    }
  };

  const renderQRSection = () => {
    if (isGenerating) {
      return <LoadingSpinner />;
    }
    
    if (!text.trim()) {
      return <EmptyState />;
    }
    
    if (qrDataUrl) {
      return (
        <QRDisplay
          qrDataUrl={qrDataUrl}
          onDownload={handleDownload}
          onCopy={handleCopy}
          isCopied={isCopied}
        />
      );
    }
    
    return <EmptyState />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern id=%22grid%22 width=%2220%22 height=%2220%22 patternUnits=%22userSpaceOnUse%22%3E%3Cpath d=%22M 20 0 L 0 0 0 20%22 fill=%22none%22 stroke=%22%23f3f4f6%22 stroke-width=%221%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22url(%23grid)%22 /%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <Header />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <TextInput
                  text={text}
                  onChange={setText}
                  placeholder="Enter your text, URL, or any content to generate a QR code..."
                />
                
                <FeatureCards />
              </div>
              
              <div className="lg:sticky lg:top-8">
                {renderQRSection()}
              </div>
            </div>
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;