import React from 'react';
import { motion } from 'motion/react';
import { BrainCircuit, ShieldCheck, Box, Server, Lock } from 'lucide-react';

export function FeatureBento() {
  return (
    <section className="py-20 relative max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Precision over speed.</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
          Designed from the kernel up to safely manage the execution of autonomous tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 min-h-[600px]">
        
        {/* Planner-Executor Engine (2x2 on Desktop) */}
        <motion.div 
          whileHover={{ scale: 0.99 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="md:col-span-2 md:row-span-2 bg-[#0C0C0E] rounded-[2rem] border border-white/10 p-10 flex flex-col justify-end relative overflow-hidden group shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="absolute top-10 right-10">
            <BrainCircuit className="w-16 h-16 text-cyan-500/40" />
          </div>

          <div className="relative z-10 w-full mb-12">
             <div className="flex gap-4">
               <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-4 shadow-inner">
                 <div className="text-xs text-zinc-500 uppercase font-bold tracking-wide mb-2">Planner</div>
                 <div className="text-sm text-zinc-300">Generates comprehensive, multi-step execution graphs and dependency maps based on user intent.</div>
               </div>
               <div className="flex-1 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-4 shadow-inner relative">
                 <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-px bg-cyan-500/50"></div>
                 <div className="text-xs text-cyan-400 uppercase font-bold tracking-wide mb-2">Executor</div>
                 <div className="text-sm text-zinc-200">Strictly follows the approved graph, executing one node at a time with verification checks.</div>
               </div>
             </div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-3">Planner-Executor Engine</h3>
            <p className="text-zinc-400 font-medium max-w-md leading-relaxed">
              We separate intent parsing from action generation. By splitting the logic into dual phases, OpenMacaw reduces hallucinations and ensures the planned workflow aligns exactly with your goal before any context is sent to the executor.
            </p>
          </div>
        </motion.div>

        {/* Human in the Loop (1x1) */}
        <motion.div 
          whileHover={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="bg-white/5 rounded-[2rem] border border-white/10 p-8 flex flex-col justify-end relative overflow-hidden group shadow-2xl"
        >
          <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <ShieldCheck className="w-10 h-10 text-blue-400 mb-auto relative z-10" />
          
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-2">Final Authority</h3>
            <p className="text-zinc-400 text-sm font-medium">
              Every critical action requires your final approval. OpenMacaw pauses execution on state-modifying tasks until you verify the parameters.
            </p>
          </div>
        </motion.div>

        {/* Cross-Platform Core (1x1) */}
        <motion.div 
          whileHover={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="bg-black rounded-[2rem] border border-white/10 p-8 flex flex-col justify-end relative overflow-hidden group shadow-2xl"
        >
          <div className="absolute inset-0 bg-zinc-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <Box className="w-10 h-10 text-zinc-300 mb-auto relative z-10" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Server className="w-4 h-4 text-emerald-400" />
              <Lock className="w-4 h-4 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Rust Core</h3>
            <p className="text-zinc-400 text-sm font-medium">
              Built in Rust for maximum memory safety and performance. Run the core daemon securely on Windows, macOS, or Linux servers.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
