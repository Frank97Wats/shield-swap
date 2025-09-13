# Shield Swap Deployment Guide

## Project Overview

Shield Swap is a privacy-preserving token swap platform powered by Fully Homomorphic Encryption (FHE) technology. This guide will help you deploy the project to Vercel.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Vercel account
- Wallet Connect Project ID

## Installation Steps

### 1. Install Dependencies

If you encounter issues with npm, try using yarn:

```bash
# Using yarn (recommended)
yarn install

# Or using npm
npm install
```

### 2. Environment Configuration

Copy the environment example file and configure your variables:

```bash
cp env.example .env.local
```

Update the following variables in `.env.local`:

```env
# Get your Wallet Connect Project ID from https://cloud.walletconnect.com/
VITE_WALLET_CONNECT_PROJECT_ID=your-wallet-connect-project-id

# RPC URLs
VITE_SEPOLIA_RPC_URL=https://sepolia.rpc.zama.ai
VITE_HARDHAT_RPC_URL=http://localhost:8545

# Contract Addresses (will be set after deployment)
VITE_SHIELD_SWAP_CONTRACT_ADDRESS=

# FHE Configuration
VITE_FHE_RELAYER_URL=https://relayer.zama.ai
```

### 3. Local Development

Start the development server:

```bash
# Using yarn
yarn dev

# Or using npm
npm run dev
```

The application will be available at `http://localhost:8080`

### 4. Build for Production

```bash
# Using yarn
yarn build

# Or using npm
npm run build
```

## Vercel Deployment

### Method 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel --prod
```

### Method 2: GitHub Integration

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically

### Environment Variables in Vercel

Add these environment variables in your Vercel project settings:

- `VITE_WALLET_CONNECT_PROJECT_ID`
- `VITE_SEPOLIA_RPC_URL`
- `VITE_SHIELD_SWAP_CONTRACT_ADDRESS`
- `VITE_FHE_RELAYER_URL`

## Smart Contract Deployment

### Prerequisites

- Hardhat installed
- FHE dependencies configured
- Sepolia testnet ETH for gas fees

### Deploy to Sepolia

1. Configure your private key in `.env`:
```env
SEPOLIA_PRIVATE_KEY=your-private-key
SEPOLIA_RPC_URL=https://sepolia.rpc.zama.ai
```

2. Deploy the contract:
```bash
npx hardhat run scripts/deploy.ts --network sepolia
```

3. Update the contract address in your environment variables

## Features Implemented

✅ **Wallet Integration**
- RainbowKit wallet connection
- Support for multiple wallets
- Network switching

✅ **Privacy Features**
- FHE-encrypted swap orders
- Encrypted liquidity pools
- Private trading statistics
- Encrypted reputation system

✅ **UI Components**
- Modern trading interface
- Real-time order book
- Trading statistics dashboard
- Responsive design

✅ **Smart Contract**
- FHE-encrypted swap functionality
- Liquidity pool management
- Price oracle integration
- Reputation system

## Troubleshooting

### Common Issues

1. **Dependency Installation Issues**
   - Try using yarn instead of npm
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and package-lock.json, then reinstall

2. **Wallet Connection Issues**
   - Ensure Wallet Connect Project ID is correctly set
   - Check network configuration
   - Verify RPC URLs are accessible

3. **Build Issues**
   - Check TypeScript errors
   - Verify all imports are correct
   - Ensure environment variables are set

### Support

For issues related to:
- FHE integration: Check Zama documentation
- Wallet connection: Check RainbowKit documentation
- Vercel deployment: Check Vercel documentation

## Security Notes

- Never commit private keys or sensitive data
- Use environment variables for all configuration
- Test thoroughly on testnets before mainnet deployment
- Keep dependencies updated for security patches

## License

MIT License - see LICENSE file for details
