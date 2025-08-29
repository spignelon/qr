import { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { useDebounce } from './useDebounce';

export const useQRGenerator = (text: string) => {
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const debouncedText = useDebounce(text, 300);

  useEffect(() => {
    const generateQR = async () => {
      if (!debouncedText.trim()) {
        setQrDataUrl('');
        return;
      }

      setIsGenerating(true);
      
      try {
        const qrOptions = {
          errorCorrectionLevel: 'M' as const,
          type: 'image/png' as const,
          quality: 0.92,
          margin: 2,
          color: {
            dark: '#1F2937',
            light: '#FFFFFF'
          },
          width: 768
        };

        const dataUrl = await QRCode.toDataURL(debouncedText, qrOptions);
        setQrDataUrl(dataUrl);
      } catch (error) {
        console.error('Error generating QR code:', error);
      } finally {
        setIsGenerating(false);
      }
    };

    generateQR();
  }, [debouncedText]);

  return { qrDataUrl, isGenerating };
};