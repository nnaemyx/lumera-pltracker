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
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,211,238,0.10),transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.08),transparent_50%)] pointer-events-none" />
      {/* Animated mesh gradient */}
      <div className="fixed inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(6,182,212,0.06)_50%,transparent_70%)] pointer-events-none animate-pulse"></div>
      {/* Wave pattern */}
      <div className="fixed inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q25 30 50 50 T100 50' stroke='%2306b6d4' fill='none'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px'
      }}></div>
      
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
            {/* HERO SECTION - AURORA DESIGN */}
            <div className="mb-20 mt-8">
              <div className="max-w-7xl mx-auto">
                {/* Card-Based Asymmetric Layout */}
                <div className="grid lg:grid-cols-12 gap-6 mb-16">
                  {/* Main Hero Card - Left Side */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-7"
                  >
                    <div className="bg-gradient-to-br from-[#111118] to-[#0f0f15] rounded-3xl p-10 border-2 border-cyan-500/30 shadow-2xl backdrop-blur-md relative overflow-hidden">
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6,182,212,0.2) 1px, transparent 0)`,
                          backgroundSize: '40px 40px'
                        }}></div>
                      </div>
                      
                      <div className="relative z-10 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                          <Sparkles className="text-cyan-400" size={16} />
                          <span className="text-cyan-300 text-xs font-semibold tracking-wider" style={{ fontFamily: 'var(--font-exo2)' }}>
                            Advanced DeFi Platform
                          </span>
                        </div>

                        <h1 
                          className="text-5xl md:text-7xl font-bold text-white leading-tight"
                          style={{ fontFamily: 'var(--font-exo2)' }}
                        >
                          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                            AURORA
                          </span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
                          Experience the dawn of decentralized finance. A powerful platform for staking, governance, and token management on the Cosmos ecosystem.
                        </p>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="flex flex-wrap items-center gap-6"
                        >
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-xl transition-all duration-300 font-semibold text-base shadow-2xl glow-primary"
                            style={{ fontFamily: 'var(--font-exo2)' }}
                          >
                            <AlertCircle size={20} />
                            <span>Connect Wallet</span>
                            <ArrowRight size={18} />
                          </motion.button>
                          
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-2 text-cyan-300">
                              <Zap className="text-cyan-400" size={18} />
                              <span>Lightning Fast</span>
                            </div>
                            <div className="flex items-center gap-2 text-blue-300">
                              <Shield className="text-blue-400" size={18} />
                              <span>Secure</span>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Side Cards - Right Side */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:col-span-5 space-y-6"
                  >
                    {/* Feature Card 1 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="bg-gradient-to-br from-[#111118] to-[#0f0f15] rounded-2xl p-6 border-2 border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 shadow-lg glow-primary group-hover:rotate-6 transition-transform duration-300">
                        <Shield className="text-white" size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'var(--font-exo2)' }}>
                        Enterprise Security
                      </h3>
                      <p className="text-sm text-gray-400">
                        Multi-layer protection
                      </p>
                    </motion.div>

                    {/* Feature Card 2 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="bg-gradient-to-br from-[#111118] to-[#0f0f15] rounded-2xl p-6 border-2 border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg glow-primary group-hover:rotate-6 transition-transform duration-300">
                        <TrendingUp className="text-white" size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'var(--font-exo2)' }}>
                        Smart Staking
                      </h3>
                      <p className="text-sm text-gray-400">
                        Optimized yields
                      </p>
                    </motion.div>

                    {/* Visual Card */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 }}
                      className="bg-gradient-to-br from-[#111118] to-[#0f0f15] rounded-2xl p-8 border-2 border-teal-500/30 flex items-center justify-center h-[200px] overflow-hidden relative"
                    >
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(6,182,212,0.1) 10px, rgba(6,182,212,0.1) 20px)`,
                        }}></div>
                      </div>
                      <motion.div
                        animate={{ 
                          rotate: [0, 360],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                          scale: { duration: 4, repeat: Infinity }
                        }}
                        className="w-32 h-32 bg-gradient-to-br from-cyan-600 via-blue-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-2xl glow-primary border-4 border-cyan-400/50 relative z-10"
                      >
                        <span className="text-white font-bold text-6xl" style={{ fontFamily: 'var(--font-exo2)' }}>A</span>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Feature Grid - 4 Columns */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                >
                  {[
                    { icon: Shield, title: "Security", desc: "Enterprise-grade", gradient: "from-cyan-500 to-cyan-600", delay: 0.8 },
                    { icon: TrendingUp, title: "Staking", desc: "Maximize returns", gradient: "from-blue-500 to-blue-600", delay: 0.9 },
                    { icon: Globe, title: "Cross-Chain", desc: "IBC compatible", gradient: "from-teal-500 to-teal-600", delay: 1.0 },
                    { icon: Zap, title: "Performance", desc: "Lightning fast", gradient: "from-cyan-400 to-blue-500", delay: 1.1 },
                  ].map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: feature.delay }}
                      className="bg-gradient-to-br from-[#111118] to-[#0f0f15] rounded-2xl p-6 border-2 border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 group text-center"
                    >
                      <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg glow-primary group-hover:rotate-12 transition-transform duration-300`}>
                        <feature.icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'var(--font-exo2)' }}>
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {feature.desc}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* INFO CARDS */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <NetworkInfo />
              <Features />
            </div>

            {/* GETTING STARTED */}
            <div className="bg-gradient-to-br from-[#111118] to-[#0f0f15] rounded-3xl p-10 border-2 border-cyan-500/20 shadow-2xl backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-8 tracking-tight" style={{ fontFamily: 'var(--font-exo2)' }}>
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
                      <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white flex items-center justify-center text-base font-bold shadow-lg glow-primary group-hover:scale-110 transition-transform duration-300 flex-shrink-0" style={{ fontFamily: 'var(--font-exo2)' }}>
                        {i + 1}
                      </span>
                      <span className="leading-relaxed text-base font-normal pt-3 text-gray-300 group-hover:text-white transition-colors">
                        {i === 0 ? (
                          <>
                            Install <a href="https://www.keplr.app/" target="_blank" rel="noopener noreferrer" className="underline text-cyan-400 font-semibold hover:text-blue-400 transition-colors">Keplr Wallet</a> browser extension
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
