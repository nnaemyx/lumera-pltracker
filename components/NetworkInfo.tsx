"use client";

import { Activity, Zap, Shield } from "lucide-react";

export default function NetworkInfo() {
  return (
    <div className="bg-gradient-to-br from-[#111118] to-[#0f0f15] rounded-3xl p-7 border-2 border-pink-500/20 shadow-xl backdrop-blur-md">
      <h3 className="text-2xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-kanit)' }}>
        Network Status
      </h3>
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-pink-500/20 rounded-2xl flex items-center justify-center border-2 border-pink-400/40 shadow-lg">
              <Activity className="text-pink-400" size={24} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white uppercase tracking-wider" style={{ fontFamily: 'var(--font-kanit)' }}>
                Network
              </p>
              <p className="text-sm text-gray-300 font-medium mt-1">
                Lumera Mainnet
              </p>
            </div>
          </div>
          <span className="px-4 py-2 bg-pink-500/20 text-pink-400 rounded-full text-xs font-semibold border-2 border-pink-400/40 shadow-lg" style={{ fontFamily: 'var(--font-kanit)' }}>
            Active
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-fuchsia-500/20 rounded-2xl flex items-center justify-center border-2 border-fuchsia-400/40 shadow-lg">
              <Zap className="text-fuchsia-400" size={24} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white uppercase tracking-wider" style={{ fontFamily: 'var(--font-kanit)' }}>
                Chain ID
              </p>
              <p className="text-sm text-gray-300 font-medium mt-1 font-mono">
                lumera-mainnet-1
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center border-2 border-purple-400/40 shadow-lg">
              <Shield className="text-purple-400" size={24} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white uppercase tracking-wider" style={{ fontFamily: 'var(--font-kanit)' }}>
                Consensus
              </p>
              <p className="text-sm text-gray-300 font-medium mt-1">
                CometBFT
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

