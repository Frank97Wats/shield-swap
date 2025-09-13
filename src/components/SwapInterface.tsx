import { useState, useEffect } from "react";
import { ArrowUpDown, Settings, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TokenSelector from "./TokenSelector";
import { useAccount, useBalance, useReadContract } from "wagmi";
import { formatEther, parseEther } from "viem";

const SwapInterface = () => {
  const { address, isConnected } = useAccount();
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [fromToken, setFromToken] = useState({ symbol: "ETH", name: "Ethereum", logo: "⟠", address: "0x0000000000000000000000000000000000000000" });
  const [toToken, setToToken] = useState({ symbol: "USDC", name: "USD Coin", logo: "💲", address: "0xA0b86a33E6441b8c4C8C0C4C0C4C0C4C0C4C0C4C" });
  const [isLoading, setIsLoading] = useState(false);

  // Get ETH balance
  const { data: ethBalance } = useBalance({
    address: address,
  });

  // Get USDC balance (mock for now)
  const { data: usdcBalance } = useBalance({
    address: address,
    token: toToken.address as `0x${string}`,
  });

  const handleSwapTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  const handleSwap = async () => {
    if (!isConnected || !fromAmount) return;
    
    setIsLoading(true);
    try {
      // Here you would call the ShieldSwap contract
      // For now, we'll just simulate the swap
      console.log(`Swapping ${fromAmount} ${fromToken.symbol} for ${toAmount} ${toToken.symbol}`);
      
      // Simulate swap delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset amounts after successful swap
      setFromAmount("");
      setToAmount("");
    } catch (error) {
      console.error("Swap failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getBalance = () => {
    if (!isConnected) return "0.00";
    if (fromToken.symbol === "ETH") {
      return ethBalance ? parseFloat(formatEther(ethBalance.value)).toFixed(4) : "0.00";
    }
    return usdcBalance ? parseFloat(formatEther(usdcBalance.value)).toFixed(2) : "0.00";
  };

  const getToBalance = () => {
    if (!isConnected) return "0.00";
    if (toToken.symbol === "ETH") {
      return ethBalance ? parseFloat(formatEther(ethBalance.value)).toFixed(4) : "0.00";
    }
    return usdcBalance ? parseFloat(formatEther(usdcBalance.value)).toFixed(2) : "0.00";
  };

  // Calculate toAmount when fromAmount changes
  useEffect(() => {
    if (fromAmount && !isNaN(parseFloat(fromAmount))) {
      // Mock exchange rate: 1 ETH = 2500 USDC
      const rate = fromToken.symbol === "ETH" && toToken.symbol === "USDC" ? 2500 : 
                   fromToken.symbol === "USDC" && toToken.symbol === "ETH" ? 0.0004 : 1;
      const calculated = (parseFloat(fromAmount) * rate).toFixed(6);
      setToAmount(calculated);
    } else {
      setToAmount("");
    }
  }, [fromAmount, fromToken.symbol, toToken.symbol]);

  return (
    <div className="swap-card max-w-md mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground">Confidential Swap</h2>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-xs text-gold bg-gold/10 px-2 py-1 rounded-full">
            <Info className="w-3 h-3" />
            Private
          </div>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        {/* From Token */}
        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">From</span>
            <span className="text-xs text-muted-foreground">
              Balance: {isConnected ? getBalance() : "0.00"} {fromToken.symbol}
            </span>
          </div>
          <div className="trading-panel p-4">
            <div className="flex items-center justify-between">
              <Input
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                placeholder="0.0"
                className="border-0 bg-transparent text-2xl font-semibold p-0 h-auto focus-visible:ring-0"
              />
              <TokenSelector selectedToken={fromToken} onTokenSelect={setFromToken} />
            </div>
            <div className="text-xs text-muted-foreground mt-2">≈ $0.00</div>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center -my-1 relative z-10">
          <Button
            onClick={handleSwapTokens}
            variant="outline"
            size="sm"
            className="rounded-full p-2 bg-card hover:bg-secondary border-border hover:border-gold transition-all duration-200"
          >
            <ArrowUpDown className="w-4 h-4" />
          </Button>
        </div>

        {/* To Token */}
        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">To</span>
            <span className="text-xs text-muted-foreground">
              Balance: {isConnected ? getToBalance() : "0.00"} {toToken.symbol}
            </span>
          </div>
          <div className="trading-panel p-4">
            <div className="flex items-center justify-between">
              <Input
                value={toAmount}
                onChange={(e) => setToAmount(e.target.value)}
                placeholder="0.0"
                className="border-0 bg-transparent text-2xl font-semibold p-0 h-auto focus-visible:ring-0"
              />
              <TokenSelector selectedToken={toToken} onTokenSelect={setToToken} />
            </div>
            <div className="text-xs text-muted-foreground mt-2">≈ $0.00</div>
          </div>
        </div>
      </div>

      {/* Swap Details */}
      <div className="mt-4 p-4 bg-secondary/30 rounded-lg border border-border">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Rate</span>
            <span className="text-foreground">1 ETH = 2,500 USDC</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Privacy Fee</span>
            <span className="text-gold">0.1%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Slippage</span>
            <span className="text-foreground">0.5%</span>
          </div>
        </div>
      </div>

      {/* Swap Button */}
      <Button 
        onClick={handleSwap}
        disabled={!isConnected || !fromAmount || isLoading}
        className="w-full mt-6 bg-gradient-to-r from-gold to-gold-light hover:from-gold-dark hover:to-gold text-primary-foreground font-semibold py-3 h-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {!isConnected ? "Connect Wallet" : isLoading ? "Swapping..." : "Swap"}
      </Button>
    </div>
  );
};

export default SwapInterface;