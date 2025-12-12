"use client";

import { useState } from "react";
import { useWallet } from "@/contexts/WalletContext";
import { sendTokens } from "@/lib/cosmos-client";
import { X, Send, Loader2 } from "lucide-react";

interface TransferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TransferModal({ isOpen, onClose }: TransferModalProps) {
  const { signer, address, refreshBalance } = useWallet();
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [memo, setMemo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signer || !address) return;

    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const result = await sendTokens(signer, address, recipient, amount, memo);
      setSuccess(`Transfer successful! Tx: ${result.transactionHash}`);
      setRecipient("");
      setAmount("");
      setMemo("");
      await refreshBalance();
      setTimeout(() => {
        onClose();
        setSuccess("");
      }, 3000);
    } catch (err: any) {
      setError(err.message || "Transfer failed");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
      <div className="bg-[#111118] rounded-2xl shadow-2xl max-w-md w-full p-6 border-2 border-[#1e1e2e]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            Send LUME
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#1e1e2e] rounded-xl transition-all duration-200 hover:scale-110 active:scale-95 text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Recipient Address
            </label>
            <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="lumera1..."
              required
              className="w-full px-4 py-3 border-2 border-[#1e1e2e] rounded-xl focus:ring-2 focus:ring-[#00ff88] focus:border-[#00ff88] bg-[#0a0a0f] text-white transition-all duration-200 font-medium placeholder-gray-500"
            />
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

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Memo (Optional)
            </label>
            <input
              type="text"
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              placeholder="Optional message"
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
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#00b8e6] hover:from-[#00d977] hover:via-[#00b8e6] hover:to-[#0099cc] text-[#0a0a0f] rounded-xl transition-all duration-200 font-semibold text-sm shadow-lg glow-primary hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Send size={20} />
                Send Tokens
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

