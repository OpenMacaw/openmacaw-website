import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { EyeOff, Eye } from 'lucide-react';

export function WhySection() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0.1, 0.3], [100, 0]);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black z-0 pointer-events-none"></div>
      
      <motion.div 
        style={{ opacity, y }}
        className="max-w-6xl mx-auto px-6 relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">The evolution of automation.</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Stop praying your agent gets it right. Start approving what it actually does.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Default Agents */}
          <div className="bg-zinc-900/40 border border-red-500/20 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors"></div>
            <EyeOff className="w-8 h-8 text-red-400 mb-6" />
            <h3 className="text-xl font-semibold text-zinc-200 mb-3">The "Black-Box" Way</h3>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✕</span> Executes actions autonomously without your knowledge.</li>
              <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✕</span> Hallucinates non-existent UI elements.</li>
              <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✕</span> Wastes tokens in infinite retry loops.</li>
            </ul>
          </div>

          {/* The Macaw Way */}
          <div className="bg-white/5 border border-cyan-500/30 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden group shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 group-hover:opacity-100 transition-opacity"></div>
            <Eye className="w-8 h-8 text-cyan-400 mb-6" />
            <h3 className="text-xl font-semibold text-white mb-3">The Human-in-the-Loop Way</h3>
            <ul className="space-y-4 text-zinc-300 text-sm font-medium">
              <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">✓</span> Reviews the full execution plan before a single click happens.</li>
              <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">✓</span> Halts immediately if the UI changes unexpectedly.</li>
              <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">✓</span> Intervene, edit, or cancel plans at any point.</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
