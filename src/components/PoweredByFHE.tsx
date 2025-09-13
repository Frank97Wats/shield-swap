const PoweredByFHE = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-transparent via-gold/20 to-transparent border-b border-gold/30">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent animate-pulse-glow" />
      <div className="relative flex items-center justify-center py-3 px-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-gold rounded-full animate-pulse-glow" />
          <span className="text-gold text-sm font-semibold tracking-wider">
            POWERED BY FHE
          </span>
          <div className="w-2 h-2 bg-gold rounded-full animate-pulse-glow" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
    </div>
  );
};

export default PoweredByFHE;