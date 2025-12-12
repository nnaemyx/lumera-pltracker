"use client";

import { useState, useEffect } from "react";
import { useWallet } from "@/contexts/WalletContext";
import { delegate, undelegate, getValidators } from "@/lib/cosmos-client";
import { X, TrendingUp, Loader2 } from "lucide-react";

interface StakingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StakingModal({ isOpen, onClose }: StakingModalProps) {
  const { signer, address, refreshBalance } = useWallet();
  const [validators, setValidators] = useState<any[]>([]);
  const [selectedValidator, setSelectedValidator] = useState("");
  const [amount, setAmount] = useState("");
  const [action, setAction] = useState<"delegate" | "undelegate">("delegate");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingValidators, setIsLoadingValidators] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (isOpen) {
      loadValidators();
    }
  }, [isOpen]);

  const loadValidators = async () => {
    setIsLoadingValidators(true);
    setError("");
    try {
      const vals = await getValidators();
      setValidators(vals.slice(0, 50)); // Get up to 50 validators
      console.log(`Loaded ${vals.length} validators from Lumera`);
    } catch (err: any) {
      console.error("Error loading validators:", err);
      setError(err.message || "Failed to load validators from the network");
      setValidators([]);
    } finally {
      setIsLoadingValidators(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signer || !address) return;

    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      let result;
      if (action === "delegate") {
        result = await delegate(signer, address, selectedValidator, amount);
        setSuccess(
          `Successfully delegated ${amount} LUME! Tx: ${result.transactionHash}`
        );
      } else {
        result = await undelegate(signer, address, selectedValidator, amount);
        setSuccess(
          `Successfully undelegated ${amount} LUME! Tx: ${result.transactionHash}`
        );
      }

      setAmount("");
      await refreshBalance();

      setTimeout(() => {
        onClose();
        setSuccess("");
      }, 3000);
    } catch (err: any) {
      setError(err.message || "Operation failed");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
      <div className="bg-[#111118] rounded-2xl shadow-2xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto border-2 border-[#1e1e2e]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            Staking
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#1e1e2e] rounded-xl transition-all duration-200 hover:scale-110 active:scale-95 text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setAction("delegate")}
            className={`flex-1 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
              action === "delegate"
                ? "bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#00b8e6] text-[#0a0a0f] shadow-lg glow-primary scale-[1.02]"
                : "bg-[#1a1a24] text-gray-300 hover:bg-[#1e1e2e] border border-[#1e1e2e]"
            }`}
          >
            Delegate
          </button>
          <button
            onClick={() => setAction("undelegate")}
            className={`flex-1 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
              action === "undelegate"
                ? "bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#00b8e6] text-[#0a0a0f] shadow-lg glow-primary scale-[1.02]"
                : "bg-[#1a1a24] text-gray-300 hover:bg-[#1e1e2e] border border-[#1e1e2e]"
            }`}
          >
            Undelegate
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Validator
            </label>
            {isLoadingValidators ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="animate-spin text-[#00ff88]" size={32} />
                <span className="ml-2 text-sm text-gray-400">Loading validators from Lumera...</span>
              </div>
            ) : validators.length === 0 ? (
              <div className="p-4 bg-amber-950/30 border border-amber-500/30 rounded-lg">
                <p className="text-sm text-amber-300">
                  ⚠️ No validators available. This could mean:
                </p>
                <ul className="text-xs text-amber-400/80 mt-2 ml-4 list-disc">
                  <li>Lumera network is not fully active yet</li>
                  <li>Network connection issues</li>
                  <li>RPC/REST endpoints may be down</li>
                </ul>
                <button
                  onClick={loadValidators}
                  className="mt-3 text-sm text-[#00ff88] hover:underline font-semibold"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <select
                value={selectedValidator}
                onChange={(e) => setSelectedValidator(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-[#1e1e2e] rounded-xl focus:ring-2 focus:ring-[#00ff88] focus:border-[#00ff88] bg-[#0a0a0f] text-white transition-all duration-200 font-medium"
              >
                <option value="">Select a validator ({validators.length} available)</option>
                {validators.map((validator, index) => (
                  <option
                    key={validator.operatorAddress || index}
                    value={validator.operatorAddress}
                  >
                    {validator.description?.moniker || `Validator ${index + 1}`}
                    {validator.commission?.commissionRates?.rate && 
                      ` - ${(parseFloat(validator.commission.commissionRates.rate) * 100).toFixed(2)}% commission`
                    }
                  </option>
                ))}
              </select>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Amount (LUME)
            </label>
            <input
              type="number"
              step="0.000001"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.0"
              required
              className="w-full px-4 py-3 border-2 border-[#1e1e2e] rounded-xl focus:ring-2 focus:ring-[#00ff88] focus:border-[#00ff88] bg-[#0a0a0f] text-white transition-all duration-200 font-medium placeholder-gray-500"
            />
          </div>

          {error && (
            <div className="p-3 bg-red-950/50 border border-red-500/30 rounded-lg text-red-300 text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="p-3 bg-green-950/50 border border-green-500/30 rounded-lg text-green-300 text-sm">
              {success}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading || isLoadingValidators}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#00b8e6] hover:from-[#00d977] hover:via-[#00b8e6] hover:to-[#0099cc] text-[#0a0a0f] rounded-xl transition-all duration-200 font-semibold text-sm shadow-lg glow-primary hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <TrendingUp size={20} />
                {action === "delegate" ? "Delegate" : "Undelegate"}
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

