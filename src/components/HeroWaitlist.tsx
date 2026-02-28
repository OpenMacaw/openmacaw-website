import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Terminal, ChevronRight } from 'lucide-react';

export function HeroWaitlist() {
  return (
    <section className="flex flex-col items-center text-center pt-12 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 mb-8"
      >
        <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
        <span>Coming soon to macOS Sequoia</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="text-5xl sm:text-7xl font-bold tracking-tighter mb-6 max-w-4xl bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent"
      >
        The AI agent that natively parrots your workflows.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="text-lg sm:text-xl text-zinc-400 max-w-2xl mb-10 font-light"
      >
        The macOS-native, Apple Silicon optimized fork of OpenClaw. No Electron bloat. Just pure, unadulterated performance. Your digital ghost in the machine.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="w-full max-w-md flex flex-col items-center gap-6"
      >
        <a
          href="https://tally.so/r/YOUR_ID"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-white text-black font-medium rounded-2xl hover:bg-zinc-200 transition-all active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)]"
        >
          <Terminal className="w-5 h-5" />
          <span className="text-lg">Join the Squadron</span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>

        <div className="text-sm text-zinc-500 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Early access invites rolling out weekly</span>
        </div>
      </motion.div>
    </section>
  );
}
