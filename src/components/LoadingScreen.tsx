import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Powering system grids...");

  const bootstrapLogs = [
    "Reset Vector: 0x00001000",
    "Initializing SHAKTI Front-End Core Interconnect...",
    "Caching RV32I Integer Base registers...",
    "Syncing AMBA AXI4 Interconnect pipelines...",
    "Assembling GSEP VLSI Verification suite...",
    "System fully operational."
  ];

  useEffect(() => {
    // Increment progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    // Cycle state log texts
    if (progress < 15) {
      setStatusText(bootstrapLogs[0]);
    } else if (progress < 35) {
      setStatusText(bootstrapLogs[1]);
    } else if (progress < 55) {
      setStatusText(bootstrapLogs[2]);
    } else if (progress < 75) {
      setStatusText(bootstrapLogs[3]);
    } else if (progress < 90) {
      setStatusText(bootstrapLogs[4]);
    } else {
      setStatusText(bootstrapLogs[5]);
    }
  }, [progress]);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeInOut" } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 font-sans select-none overflow-hidden"
      >
        {/* Subtle Matrix glow background */}
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-cyan-500/10 via-indigo-600/5 to-transparent blur-3xl pointer-events-none" />

        <div className="relative flex flex-col items-center max-w-sm px-6 text-center">
          {/* Animated Golden/Cyan Silicon Core */}
          <div className="relative mb-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 opacity-20 blur-md scale-110"
            />
            
            {/* outer shell resembling CPU package */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-28 h-28 rounded-3xl bg-slate-900 border-2 border-cyan-500/30 shadow-2xl p-4 flex items-center justify-center"
            >
              <Cpu className="w-14 h-14 text-cyan-400 animate-pulse" />
              
              {/* Corner silicon pins pins */}
              <div className="absolute -top-1 left-4 right-4 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 flex justify-between">
                <span className="w-0.5 h-1 bg-cyan-400" />
                <span className="w-0.5 h-1 bg-cyan-400" />
                <span className="w-0.5 h-1 bg-cyan-400" />
              </div>
              <div className="absolute -bottom-1 left-4 right-4 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 flex justify-between" />
              <div className="absolute -left-1 top-4 bottom-4 w-1 bg-gradient-to-b from-cyan-500 to-indigo-500 flex flex-col justify-between" />
              <div className="absolute -right-1 top-4 bottom-4 w-1 bg-gradient-to-b from-cyan-500 to-indigo-500 flex flex-col justify-between" />
            </motion.div>
          </div>

          {/* Heading */}
          <h2 className="font-display text-lg font-bold uppercase tracking-widest text-slate-100 mb-2">
            GSEP RISC-V CORE
          </h2>
          <p className="font-mono text-xs text-cyan-400/80 mb-6 font-medium">
            ASEM × SHAKTI PROCESSOR BOOT
          </p>

          {/* Status logs */}
          <div className="w-64 h-12 flex items-center justify-center mb-8 bg-slate-900/60 border border-slate-800/80 rounded-lg p-2">
            <p className="font-mono text-[10px] text-slate-400 truncate animate-pulse">
              &gt; {statusText}
            </p>
          </div>

          {/* Progress bar container */}
          <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-slate-800/50 p-0.5 mb-2">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500"
              style={{ width: `${progress}%` }}
              layoutId="progressBar"
            />
          </div>

          <div className="flex justify-between w-full text-slate-500 text-[10px] font-mono leading-none">
            <span>SYS_CLK: 2.4 GHz</span>
            <span className="text-cyan-400">{progress}% Loaded</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
