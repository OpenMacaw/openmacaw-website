import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Lock, Fingerprint, Command, Zap } from 'lucide-react';

export function FeatureBento() {
  return (
    <section className="max-w-5xl mx-auto mb-32 px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-white">
          Built for the Mac.
        </h2>
        <p className="text-zinc-400 text-lg font-light">
          No compromises. Designed to feel like it belongs on your desktop.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
        
        {/* MLX Optimized (2x1 or 2x2 depending on screen) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 md:row-span-1 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-xl p-8 flex flex-col relative overflow-hidden group hover:border-indigo-500/30 transition-colors"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors duration-500"></div>
          <Cpu className="w-8 h-8 text-indigo-400 mb-4" />
          <h3 className="text-2xl font-semibold mb-2 text-white">MLX Optimized</h3>
          <p className="text-zinc-400 leading-relaxed max-w-md font-light">
            Local inference at the speed of hardware. Utilizing the full power of your M-series chip without draining your battery.
          </p>
          <div className="mt-auto pt-4 flex items-center gap-2">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">M1, M2, M3, M4 Ready</span>
          </div>
        </motion.div>

        {/* Privacy-First (1x1) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-1 md:row-span-1 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/30 transition-colors"
        >
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-colors duration-500"></div>
          <div>
            <Lock className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Privacy-First</h3>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              Your data never leaves your Mac's secure enclave. No cloud APIs, no telemetry.
            </p>
          </div>
          <Fingerprint className="w-12 h-12 text-zinc-800 ml-auto opacity-50 group-hover:opacity-100 transition-opacity" />
        </motion.div>

        {/* The Parrot Engine (3x1 or 3x2) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-3 md:row-span-1 rounded-[2rem] bg-zinc-900/40 border border-white/10 backdrop-blur-xl p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-8 relative overflow-hidden group hover:border-white/20 transition-colors"
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="flex-1 z-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 border border-white/10 mb-6 shadow-inner">
              <Command className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-semibold mb-3 text-white">The Parrot Engine</h3>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl font-light">
              Native accessibility hooks that observe and replicate. OpenMacaw watches, learns, and flawlessly automates your UI workflows natively.
            </p>
          </div>

          <div className="w-full sm:w-1/3 h-full min-h-[160px] rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center z-10 overflow-hidden relative shadow-inner">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity grayscale group-hover:grayscale-0 transition-all duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <Command className="w-16 h-16 text-white/50 group-hover:text-white/90 drop-shadow-2xl relative z-10 transition-colors duration-500" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
