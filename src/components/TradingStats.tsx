import { TrendingUp, TrendingDown, Activity, Shield } from "lucide-react";

const TradingStats = () => {
  const stats = [
    {
      label: "24h Volume",
      value: "Hidden",
      icon: Activity,
      trend: null,
    },
    {
      label: "Privacy Score",
      value: "100%",
      icon: Shield,
      trend: "up",
      color: "text-gold",
    },
    {
      label: "Active Pairs",
      value: "12",
      icon: TrendingUp,
      trend: "up",
    },
    {
      label: "Gas Fee",
      value: "~15 Gwei",
      icon: TrendingDown,
      trend: "down",
    },
  ];

  return (
    <div className="trading-panel">
      <div className="p-4 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">Trading Stats</h3>
      </div>
      
      <div className="p-4 space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary rounded-lg">
                <stat.icon className="w-4 h-4 text-muted-foreground" />
              </div>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-semibold ${stat.color || 'text-foreground'}`}>
                {stat.value}
              </span>
              {stat.trend && (
                <div className={`p-1 rounded ${
                  stat.trend === 'up' 
                    ? 'bg-success/10 text-success' 
                    : 'bg-destructive/10 text-destructive'
                }`}>
                  {stat.trend === 'up' ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-border">
        <div className="text-xs text-muted-foreground text-center">
          All trading data is encrypted and private
        </div>
      </div>
    </div>
  );
};

export default TradingStats;