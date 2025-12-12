"use client";

import { Send, TrendingUp, History, BarChart3 } from "lucide-react";

interface QuickActionsProps {
  onTransfer: () => void;
  onStake: () => void;
  onHistory: () => void;
  onAnalytics: () => void;
}

export default function QuickActions({
  onTransfer,
  onStake,
  onHistory,
  onAnalytics,
}: QuickActionsProps) {
  const actions = [
    {
      icon: Send,
      label: "Send Tokens",
      description: "Transfer LUME tokens",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50 dark:bg-cyan-950/20",
      borderColor: "border-cyan-200 dark:border-cyan-800",
      onClick: onTransfer,
    },
    {
      icon: TrendingUp,
      label: "Stake",
      description: "Delegate to validators",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
      borderColor: "border-emerald-200 dark:border-emerald-800",
      onClick: onStake,
    },
    {
      icon: History,
      label: "History",
      description: "View transactions",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50 dark:bg-amber-950/20",
      borderColor: "border-amber-200 dark:border-amber-800",
      onClick: onHistory,
    },
    {
      icon: BarChart3,
      label: "Analytics",
      description: "Track performance",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50 dark:bg-violet-950/20",
      borderColor: "border-violet-200 dark:border-violet-800",
      onClick: onAnalytics,
    },
  ];

  const actionColors = [
    { gradient: "from-cyan-500 to-blue-600", bg: "bg-cyan-950/30", border: "border-cyan-500/30" },
    { gradient: "from-[#00ff88] to-[#00d977]", bg: "bg-[#00ff88]/10", border: "border-[#00ff88]/30" },
    { gradient: "from-amber-500 to-orange-600", bg: "bg-amber-950/30", border: "border-amber-500/30" },
    { gradient: "from-violet-500 to-purple-600", bg: "bg-violet-950/30", border: "border-violet-500/30" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {actions.map((action, index) => (
        <button
          key={index}
          onClick={action.onClick}
          className={`group relative ${actionColors[index].bg} ${actionColors[index].border} rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border-2 hover:scale-[1.02] active:scale-[0.98] hover:border-opacity-60 backdrop-blur-sm`}
        >
          <div
            className={`w-14 h-14 bg-gradient-to-br ${actionColors[index].gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg glow-primary`}
          >
            <action.icon className="text-white" size={26} />
          </div>
          <h3 className="font-bold text-white mb-1.5 text-lg tracking-tight">
            {action.label}
          </h3>
          <p className="text-sm text-gray-400 font-medium">
            {action.description}
          </p>
        </button>
      ))}
    </div>
  );
}

