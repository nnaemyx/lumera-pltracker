"use client";

import { useState } from "react";
import { useWallet } from "@/contexts/WalletContext";
import Header from "@/components/Header";
import BalanceCard from "@/components/BalanceCard";
import QuickActions from "@/components/QuickActions";
import NetworkInfo from "@/components/NetworkInfo";
import Features from "@/components/Features";
import TransferModal from "@/components/TransferModal";
import StakingModal from "@/components/StakingModal";
import HistoryModal from "@/components/HistoryModal";
import AnalyticsModal from "@/components/AnalyticsModal";
import { AlertCircle, Sparkles, Zap, ArrowRight, Shield, TrendingUp, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { isConnected, error } = useWallet();
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [showStakingModal, setShowStakingModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [showAnalyticsModal, setShowAnalyticsModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.06),transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.04),transparent_50%)] pointer-events-none" />
      {/* Animated mesh gradient */}
      <div className="fixed inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(99,102,241,0.03)_50%,transparent_70%)] pointer-events-none animate-pulse"></div>
      
      <Header />

      <main className="container mx-auto px-4 py-10 relative z-10">
        {/* ERROR ALERT */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-950/50 border-2 border-red-500/30 rounded-2xl flex items-start gap-3 shadow-lg backdrop-blur-sm"
          >
            <AlertCircle className="text-red-400 shrink-0 mt-0.5" size={22} />
            <div>
              <p className="font-semibold text-red-300">Connection Error</p>
              <p className="text-sm text-red-400/80 mt-1">{error}</p>
            </div>
          </motion.div>
        )}

        {!isConnected ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            {/* HERO SECTION - NEW DESIGN */}
            <div className="mb-20 mt-8">
              <div className="max-w-7xl mx-auto">
                {/* Centered Hero */}
                <div className="text-center mb-16">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-500/10 border border-indigo-500/30 rounded-full mb-8 backdrop-blur-sm"
                  >
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                    <span className="text-indigo-300 text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: 'var(--font-outfit)' }}>
                      Next-Gen DeFi Platform
                    </span>
                  </motion.div>

                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-6xl md:text-8xl font-black text-white mb-6 leading-[1.05] tracking-tight"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Vortex
                    </span>
                    <br />
                    <span className="text-white text-5xl md:text-7xl">DeFi Platform</span>
                  </motion.h1>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-10 font-light"
                  >
                    Revolutionize your decentralized finance experience. Manage assets, stake tokens, and govern protocols with cutting-edge technology.
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white rounded-2xl transition-all duration-300 font-bold text-lg shadow-2xl glow-primary hover:scale-105 active:scale-95"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    <AlertCircle size={22} />
                    <span>Connect Wallet to Begin</span>
                    <ArrowRight size={20} />
                  </motion.div>
                </div>

                {/* Feature Cards Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="grid md:grid-cols-3 gap-6 mb-16"
                >
                  {[
                    { icon: Shield, title: "Secure", desc: "Enterprise-grade security", color: "indigo" },
                    { icon: TrendingUp, title: "Stake", desc: "Earn rewards seamlessly", color: "purple" },
                    { icon: Globe, title: "Govern", desc: "Shape the future", color: "pink" },
                  ].map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className={`bg-gradient-to-br from-[#111118] to-[#0f0f15] rounded-2xl p-6 border border-${feature.color}-500/20 hover:border-${feature.color}-400/40 transition-all duration-300 hover:scale-105 group`}
                    >
                      <div className={`w-14 h-14 bg-${feature.color}-500/20 rounded-xl flex items-center justify-center mb-4 border border-${feature.color}-400/30 group-hover:bg-${feature.color}-500/30 transition-colors`}>
                        <feature.icon className={`text-${feature.color}-400`} size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-outfit)' }}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {feature.desc}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Visual Element */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative max-w-4xl mx-auto"
                >
                  <div className="relative h-[400px] bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl border-2 border-indigo-500/20 overflow-hidden backdrop-blur-sm">
                    {/* Animated background */}
                    <div className="absolute inset-0">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(99,102,241,0.15) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                      }}></div>
                    </div>
                    
                    {/* Central logo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-64 h-64 border-2 border-dashed border-indigo-500/30 rounded-full"
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-32 h-32 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl glow-primary">
                            <span className="text-white font-black text-6xl" style={{ fontFamily: 'var(--font-outfit)' }}>V</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute top-10 left-10 w-4 h-4 bg-indigo-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-20 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                    <div className="absolute bottom-20 left-20 w-5 h-5 bg-pink-400 rounded-full animate-pulse delay-500"></div>
                    <div className="absolute bottom-10 right-10 w-3 h-3 bg-indigo-400 rounded-full animate-pulse delay-700"></div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* INFO CARDS */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <NetworkInfo />
              <Features />
            </div>

            {/* GETTING STARTED */}
            <div className="bg-gradient-to-br from-[#111118] to-[#0f0f15] rounded-3xl p-10 border-2 border-indigo-500/20 shadow-2xl backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-white mb-8 tracking-tight" style={{ fontFamily: 'var(--font-outfit)' }}>
                  Getting Started
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {["Install Keplr Wallet browser extension","Click 'Connect Keplr' in the header","Cosmos network will be added automatically","Start managing, staking & transacting tokens"].map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-start gap-4 group p-4 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center text-base font-black shadow-lg glow-primary group-hover:scale-110 transition-transform duration-300 flex-shrink-0" style={{ fontFamily: 'var(--font-outfit)' }}>
                        {i + 1}
                      </span>
                      <span className="leading-relaxed text-base font-normal pt-3 text-gray-300 group-hover:text-white transition-colors">
                        {i === 0 ? (
                          <>
                            Install <a href="https://www.keplr.app/" target="_blank" rel="noopener noreferrer" className="underline text-indigo-400 font-semibold hover:text-purple-400 transition-colors">Keplr Wallet</a> browser extension
                          </>
                        ) : step}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-6xl mx-auto space-y-8"
          >
            <BalanceCard />

            <QuickActions
              onTransfer={() => setShowTransferModal(true)}
              onStake={() => setShowStakingModal(true)}
              onHistory={() => setShowHistoryModal(true)}
              onAnalytics={() => setShowAnalyticsModal(true)}
            />

            <div className="grid md:grid-cols-2 gap-6">
              <NetworkInfo />
              <Features />
            </div>
          </motion.div>
        )}
      </main>

      {/* MODALS */}
      <TransferModal isOpen={showTransferModal} onClose={() => setShowTransferModal(false)} />
      <StakingModal isOpen={showStakingModal} onClose={() => setShowStakingModal(false)} />
      <HistoryModal isOpen={showHistoryModal} onClose={() => setShowHistoryModal(false)} />
      <AnalyticsModal isOpen={showAnalyticsModal} onClose={() => setShowAnalyticsModal(false)} />
    </div>
  );
}
