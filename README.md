# Shield Swap - Privacy-Preserving Token Swap Platform

A confidential DeFi swap platform powered by Fully Homomorphic Encryption (FHE) technology, enabling private token trading without revealing wallet balances.

## Features

- **Privacy-First Trading**: Trade tokens without exposing your wallet balance
- **FHE Encryption**: All sensitive data is encrypted using Zama's FHE technology
- **Real-time Order Book**: Live order book with encrypted order details
- **Trading Statistics**: Encrypted trading statistics and analytics
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS

## Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Components**: Radix UI, Tailwind CSS
- **Blockchain**: Ethereum, FHE (Fully Homomorphic Encryption)
- **State Management**: TanStack Query
- **Routing**: React Router

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open your browser to `http://localhost:8080`

## Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── SwapInterface.tsx
│   │   ├── OrderBook.tsx
│   │   ├── TradingStats.tsx
│   │   └── PoweredByFHE.tsx
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components
│   ├── App.tsx            # Main app component
│   ├── index.css          # Global styles
│   └── main.tsx           # App entry point
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Privacy & Security

This platform uses Fully Homomorphic Encryption (FHE) to ensure that:
- Your wallet balances remain private
- Trading amounts are encrypted
- Order book data is protected
- All sensitive operations are performed on encrypted data

## Deployment

The project can be deployed to any static hosting service such as Vercel, Netlify, or GitHub Pages.

## License

MIT License - see LICENSE file for details