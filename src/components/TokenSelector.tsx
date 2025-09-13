import { ChevronDown } from "lucide-react";

interface Token {
  symbol: string;
  name: string;
  logo: string;
}

interface TokenSelectorProps {
  selectedToken: Token;
  onTokenSelect: (token: Token) => void;
}

const POPULAR_TOKENS: Token[] = [
  { symbol: "ETH", name: "Ethereum", logo: "⟠" },
  { symbol: "BTC", name: "Bitcoin", logo: "₿" },
  { symbol: "USDC", name: "USD Coin", logo: "💲" },
  { symbol: "USDT", name: "Tether", logo: "₮" },
  { symbol: "WETH", name: "Wrapped Ethereum", logo: "Ⓔ" },
];

const TokenSelector = ({ selectedToken, onTokenSelect }: TokenSelectorProps) => {
  return (
    <div className="relative">
      <button className="token-button w-full justify-between min-w-[140px]">
        <div className="flex items-center gap-2">
          <span className="text-xl">{selectedToken.logo}</span>
          <div className="text-left">
            <div className="text-sm font-semibold text-foreground">
              {selectedToken.symbol}
            </div>
            <div className="text-xs text-muted-foreground">
              {selectedToken.name}
            </div>
          </div>
        </div>
        <ChevronDown className="w-4 h-4 text-muted-foreground" />
      </button>
    </div>
  );
};

export default TokenSelector;