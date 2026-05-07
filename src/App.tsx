import React, { useState } from 'react';
import { Header } from './components/Header';
import { TextInput } from './components/TextInput';
import { QRDisplay } from './components/QRDisplay';
import { LoadingSpinner } from './components/LoadingSpinner';
import { EmptyState } from './components/EmptyState';
import { Footer } from './components/Footer';
import { FeatureCards } from './components/FeatureCards';
import { useQRGenerator } from './hooks/useQRGenerator';
import { useDarkMode } from './hooks/useDarkMode';
import { downloadImage, copyImageToClipboard } from './utils/fileUtils';

function App() {
  const [text, setText] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const { qrDataUrl, isGenerating } = useQRGenerator(text);
  const { isDark, toggle } = useDarkMode();

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
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
          <Header isDark={isDark} onToggle={toggle} />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
              <div className="order-1">
                <TextInput
                  text={text}
                  onChange={setText}
                  placeholder="Enter your text, URL, or any content to generate a QR code..."
                />
                
                {/* QR Section - shows after input on mobile, in right column on desktop */}
                <div className="lg:hidden mt-6">
                  {renderQRSection()}
                </div>
                
                <div className="mt-6 lg:mt-8">
                  <FeatureCards />
                </div>
              </div>
              
              {/* QR Section - hidden on mobile, shows in right column on desktop */}
              <div className="hidden lg:block order-2 lg:sticky lg:top-8">
                {renderQRSection()}
              </div>
            </div>
          </div>
          
          <Footer />
        </div>
    </div>
  );
}

export default App;