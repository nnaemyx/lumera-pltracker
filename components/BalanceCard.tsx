"use client";

import { useWallet } from "@/contexts/WalletContext";
import { formatTokenAmount } from "@/lib/cosmos-client";
import { Coins, RefreshCw } from "lucide-react";
import { useState } from "react";

export default function BalanceCard() {
  const { balance, refreshBalance, isConnected } = useWallet();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refreshBalance();
    setTimeout(() => setIsRefreshing(false), 500);
  };

  const formattedBalance = formatTokenAmount(balance);

  return (
    <div className="bg-gradient-to-br from-[#00ff88] via-[#00d4ff] to-[#00b8e6] rounded-3xl p-8 text-[#0a0a0f] shadow-2xl glow-primary border border-[#00ff88]/30 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.1),transparent_50%)]" />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#0a0a0f]/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-[#0a0a0f]/30">
              <Coins size={32} className="text-[#0a0a0f]" />
            </div>
            <div>
              <p className="text-[#0a0a0f]/80 text-sm font-semibold uppercase tracking-wider mb-1">Total Balance</p>
              <h2 className="text-5xl font-bold mt-1 tracking-tight text-[#0a0a0f]">
                {isConnected ? formattedBalance : "0.000000"}
              </h2>
            </div>
          </div>
          {isConnected && (
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="p-3 hover:bg-[#0a0a0f]/20 rounded-xl transition-all duration-200 disabled:opacity-50 hover:scale-110 active:scale-95 backdrop-blur-sm border border-[#0a0a0f]/30"
            >
              <RefreshCw
                size={24}
                className={isRefreshing ? "animate-spin text-[#0a0a0f]" : "text-[#0a0a0f]"}
              />
            </button>
          )}
        </div>
        <div className="flex items-center justify-between pt-5 border-t border-[#0a0a0f]/30">
          <span className="text-[#0a0a0f]/80 text-sm font-semibold uppercase tracking-wider">LUME</span>
          <span className="text-xs bg-[#0a0a0f]/20 backdrop-blur-sm px-4 py-1.5 rounded-full font-semibold border border-[#0a0a0f]/30 text-[#0a0a0f]">
            Lumera Mainnet
          </span>
        </div>
      </div>
    </div>
  );
}

