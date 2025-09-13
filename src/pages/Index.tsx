import PoweredByFHE from "@/components/PoweredByFHE";
import SwapInterface from "@/components/SwapInterface";
import OrderBook from "@/components/OrderBook";
import TradingStats from "@/components/TradingStats";
import { WalletConnect } from "@/components/WalletConnect";

const Index = () => {
  return (
    <div className="min-h-screen bg-trading-bg">
      {/* Powered by FHE Header */}
      <PoweredByFHE />
      
      {/* Main Trading Dashboard */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <div className="flex justify-between items-center mb-4">
            <div></div>
            <h1 className="text-4xl font-bold text-foreground">
              Shield Swap
            </h1>
            <WalletConnect />
          </div>
          <p className="text-lg text-muted-foreground">
            Trade tokens privately without revealing your wallet balance
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left Panel - Trading Stats */}
          <div className="lg:col-span-1 space-y-6">
            <TradingStats />
          </div>
          
          {/* Center Panel - Swap Interface */}
          <div className="lg:col-span-1">
            <SwapInterface />
          </div>
          
          {/* Right Panel - Order Book */}
          <div className="lg:col-span-1">
            <OrderBook />
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-12 text-center text-xs text-muted-foreground">
          <p>Powered by Fully Homomorphic Encryption (FHE) • Your privacy is guaranteed</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
