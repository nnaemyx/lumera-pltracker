"use client";

import { Activity, Zap, Shield } from "lucide-react";

export default function NetworkInfo() {
  return (
    <div className="bg-[#111118] rounded-2xl p-6 border-2 border-[#1e1e2e] shadow-xl backdrop-blur-sm">
      <h3 className="text-xl font-bold text-white mb-5 tracking-tight">
        Network Status
      </h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#00ff88]/10 rounded-xl flex items-center justify-center border border-[#00ff88]/30">
              <Activity className="text-[#00ff88]" size={22} />
            </div>
            <div>
              <p className="text-sm font-medium text-white">
                Network
              </p>
              <p className="text-xs text-gray-400">
                Lumera Mainnet
              </p>
            </div>
          </div>
          <span className="px-3 py-1.5 bg-[#00ff88]/10 text-[#00ff88] rounded-full text-xs font-semibold border border-[#00ff88]/30">
            Active
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#00d4ff]/10 rounded-xl flex items-center justify-center border border-[#00d4ff]/30">
              <Zap className="text-[#00d4ff]" size={22} />
            </div>
            <div>
              <p className="text-sm font-medium text-white">
                Chain ID
              </p>
              <p className="text-xs text-gray-400">
                lumera-mainnet-1
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#00b8e6]/10 rounded-xl flex items-center justify-center border border-[#00b8e6]/30">
              <Shield className="text-[#00b8e6]" size={22} />
            </div>
            <div>
              <p className="text-sm font-medium text-white">
                Consensus
              </p>
              <p className="text-xs text-gray-400">
                CometBFT
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

