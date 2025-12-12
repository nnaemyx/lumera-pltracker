"use client";

import { Sparkles, Globe, Lock, Cpu } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Sparkles,
      title: "Advanced Technology",
      description: "Built on cutting-edge blockchain infrastructure",
    },
    {
      icon: Globe,
      title: "IBC Compatible",
      description: "Interoperable with Cosmos ecosystem",
    },
    {
      icon: Lock,
      title: "Secure",
      description: "Built with CometBFT consensus",
    },
    {
      icon: Cpu,
      title: "High Performance",
      description: "Fast finality and throughput",
    },
  ];

  return (
    <div className="bg-[#111118] rounded-2xl p-6 border-2 border-[#1e1e2e] shadow-xl backdrop-blur-sm">
      <h3 className="text-xl font-bold text-white mb-5 tracking-tight">
        Nexus Features
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg glow-primary">
              <feature.icon className="text-white" size={22} />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">
                {feature.title}
              </h4>
              <p className="text-xs text-gray-400 mt-1 font-medium">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

