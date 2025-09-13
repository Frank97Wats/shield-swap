import { useState, useEffect } from "react";

interface OrderBookEntry {
  price: number;
  amount: number;
  total: number;
  type: "buy" | "sell";
}

const OrderBook = () => {
  const [orders, setOrders] = useState<OrderBookEntry[]>([]);

  // Generate mock order book data
  useEffect(() => {
    const generateOrders = () => {
      const basePrice = 2500;
      const newOrders: OrderBookEntry[] = [];
      
      // Generate buy orders (bids)
      for (let i = 0; i < 8; i++) {
        newOrders.push({
          price: basePrice - (i + 1) * Math.random() * 50,
          amount: Math.random() * 10,
          total: 0,
          type: "buy"
        });
      }
      
      // Generate sell orders (asks)
      for (let i = 0; i < 8; i++) {
        newOrders.push({
          price: basePrice + (i + 1) * Math.random() * 50,
          amount: Math.random() * 10,
          total: 0,
          type: "sell"
        });
      }
      
      // Calculate totals
      let buyTotal = 0;
      let sellTotal = 0;
      
      newOrders.forEach(order => {
        if (order.type === "buy") {
          buyTotal += order.amount;
          order.total = buyTotal;
        } else {
          sellTotal += order.amount;
          order.total = sellTotal;
        }
      });
      
      setOrders(newOrders);
    };

    generateOrders();
    const interval = setInterval(generateOrders, 3000);
    return () => clearInterval(interval);
  }, []);

  const sellOrders = orders.filter(o => o.type === "sell").reverse();
  const buyOrders = orders.filter(o => o.type === "buy");

  return (
    <div className="trading-panel">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Order Book</h3>
          <div className="text-xs text-gold bg-gold/10 px-2 py-1 rounded-full">
            Hidden Orders
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="grid grid-cols-3 gap-4 text-xs text-muted-foreground mb-3">
          <div>Price (USDC)</div>
          <div className="text-right">Amount (ETH)</div>
          <div className="text-right">Total</div>
        </div>
        
        {/* Sell Orders */}
        <div className="space-y-1 mb-4">
          {sellOrders.map((order, index) => (
            <div key={`sell-${index}`} className="order-book-item grid grid-cols-3 gap-4 text-xs py-1 rounded relative overflow-hidden">
              <div
                className="absolute right-0 top-0 bottom-0 bg-destructive/10"
                style={{ width: `${(order.amount / 10) * 100}%` }}
              />
              <div className="text-destructive font-mono relative z-10">
                {order.price.toFixed(2)}
              </div>
              <div className="text-right text-foreground font-mono relative z-10">
                {order.amount.toFixed(4)}
              </div>
              <div className="text-right text-muted-foreground font-mono relative z-10">
                {order.total.toFixed(4)}
              </div>
            </div>
          ))}
        </div>
        
        {/* Current Price */}
        <div className="price-ticker text-center py-3 my-4 border-y border-border">
          <div className="text-xl font-bold text-gold">
            2,500.00 USDC
          </div>
          <div className="text-xs text-success">+2.5% (24h)</div>
        </div>
        
        {/* Buy Orders */}
        <div className="space-y-1">
          {buyOrders.map((order, index) => (
            <div key={`buy-${index}`} className="order-book-item grid grid-cols-3 gap-4 text-xs py-1 rounded relative overflow-hidden">
              <div
                className="absolute right-0 top-0 bottom-0 bg-success/10"
                style={{ width: `${(order.amount / 10) * 100}%` }}
              />
              <div className="text-success font-mono relative z-10">
                {order.price.toFixed(2)}
              </div>
              <div className="text-right text-foreground font-mono relative z-10">
                {order.amount.toFixed(4)}
              </div>
              <div className="text-right text-muted-foreground font-mono relative z-10">
                {order.total.toFixed(4)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderBook;