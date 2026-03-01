import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Terminal, ChevronRight, Command, Play, CheckCircle } from 'lucide-react';

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

      {/* CSS-only macOS Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
        className="w-full max-w-5xl mx-auto mt-20 text-left"
      >
        <div className="relative rounded-[2rem] bg-[#1C1C1E] border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] shadow-indigo-500/5 overflow-hidden flex flex-col h-[500px]">
          {/* Title Bar */}
          <div className="h-12 bg-white/[0.02] border-b border-white/5 flex items-center px-4 gap-2 relative">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 p-0.5"><div className="w-full h-full rounded-full bg-black/20"></div></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 p-0.5"><div className="w-full h-full rounded-full bg-black/20"></div></div>
              <div className="w-3 h-3 rounded-full bg-green-500 p-0.5"><div className="w-full h-full rounded-full bg-black/20"></div></div>
            </div>
            <div className="absolute inset-x-0 flex justify-center items-center gap-2 text-xs text-zinc-400 font-medium pointer-events-none">
              <Command className="w-3.5 h-3.5" />
              <span>OpenMacaw</span>
            </div>
          </div>
          
          {/* Main Layout */}
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar */}
            <div className="w-64 bg-white/[0.02] border-r border-white/5 p-4 flex flex-col gap-4">
              <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1 px-2">Learned Workflows</div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3 text-sm text-zinc-300 bg-white/5 px-3 py-2 rounded-xl border border-white/5 shadow-sm">
                  <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                  <span>Daily Standup Report</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-400 hover:bg-white/5 px-3 py-2 rounded-xl transition-colors cursor-pointer">
                  <Play className="w-4 h-4" />
                  <span>Resize Images</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-400 hover:bg-white/5 px-3 py-2 rounded-xl transition-colors cursor-pointer">
                  <Play className="w-4 h-4" />
                  <span>Deploy to Vercel</span>
                </div>
              </div>
            </div>
            
            {/* Chat Area */}
            <div className="flex-1 bg-[#1C1C1E] p-8 flex flex-col gap-6 overflow-y-auto relative">
               {/* User Message */}
               <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.5, duration: 0.5 }}
                 className="self-end max-w-[80%]"
               >
                 <div className="bg-[#007AFF] text-white text-sm px-4 py-3 rounded-2xl rounded-tr-sm shadow-md inline-block">
                   Watch me create the weekly report.
                 </div>
               </motion.div>

               {/* System Message */}
               <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 1.5, duration: 0.5 }}
                 className="flex justify-center my-2"
               >
                 <div className="text-xs text-zinc-400 italic flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/5 backdrop-blur-md">
                    <span className="text-sm">🦜</span> OpenMacaw is observing...
                 </div>
               </motion.div>

               {/* Parrot Response */}
               <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 3, duration: 0.5 }}
                 className="self-start max-w-[85%] flex gap-3"
               >
                 <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 flex-shrink-0 mt-1 shadow-inner">
                   <Command className="w-4 h-4 text-indigo-400" />
                 </div>
                 <div className="bg-[#2C2C2E] text-zinc-200 text-sm p-4 rounded-2xl rounded-tl-sm border border-white/5 shadow-md flex flex-col gap-3">
                   <p className="leading-relaxed">
                     I've learned this workflow. I can now automate the <strong>'Weekly Report'</strong> task using <span className="text-indigo-300">Safari</span> and <span className="text-emerald-400">Excel</span>.
                   </p>
                   <div className="h-px w-full bg-white/5 my-1"></div>
                   <div className="flex gap-3">
                     <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors shadow-sm active:scale-95">
                       <CheckCircle className="w-4 h-4" /> Save Automation
                     </button>
                     <button className="px-4 py-2 rounded-xl bg-white/5 text-zinc-300 text-xs font-medium hover:bg-white/10 transition-colors border border-white/5">
                       Discard
                     </button>
                   </div>
                 </div>
               </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
