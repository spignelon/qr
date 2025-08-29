export const downloadImage = (dataUrl: string, filename: string = 'qrcode.png') => {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const copyImageToClipboard = async (dataUrl: string): Promise<boolean> => {
  try {
    const response = await fetch(dataUrl);
    const blob = await response.blob();
    
    const item = new ClipboardItem({ 'image/png': blob });
    await navigator.clipboard.write([item]);
    return true;
  } catch (error) {
    console.error('Failed to copy image to clipboard:', error);
    return false;
  }
};