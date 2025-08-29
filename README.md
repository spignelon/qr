# GoQR - Modern QR Code Generator

A fast and simple QR code generator built with React and TypeScript. Generate QR codes instantly as you type.

## Features

- ⚡ **Instant Generation** - QR codes appear as you type
- 🔒 **Privacy First** - Everything happens locally in your browser
- 📱 **Mobile Ready** - Works perfectly on any device
- 💾 **Easy Export** - Download as PNG or copy to clipboard

## Access

The application can be accessed by going to: [https://spignelon.github.io/qr](https://spignelon.github.io/qr)

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/spignelon/qr.git
cd qr/project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **QRCode.js** - QR code generation
- **Lucide React** - Icons

## How It Works

1. Enter any text, URL, or content in the input field
2. QR code is generated instantly with debounced input
3. Download the QR code as PNG or copy it to clipboard
4. All processing happens locally - no data is sent to servers

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
