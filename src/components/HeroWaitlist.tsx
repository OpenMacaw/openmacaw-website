import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Terminal, ChevronRight, Shield, CheckSquare, Square, ThumbsUp } from 'lucide-react';

export function HeroWaitlist() {
  return (
    <section className="flex flex-col items-center text-center pt-12 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-400 mb-8"
      >
        <Shield className="w-3.5 h-3.5" />
        <span>Built in Rust. Safe by Design.</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="text-5xl sm:text-7xl font-bold tracking-tighter mb-6 max-w-4xl bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent"
      >
        The AI Agent with a Human in the Loop.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="text-lg sm:text-xl text-zinc-400 max-w-2xl mb-10 font-light"
      >
        OpenMacaw plans the workflow. You approve the execution. True AI collaboration without the risk of rogue actions or wild hallucinations.
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
          className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-cyan-500 text-black font-semibold rounded-2xl hover:bg-cyan-400 transition-all active:scale-95 shadow-[0_0_40px_-10px_rgba(6,182,212,0.4)] hover:shadow-[0_0_60px_-15px_rgba(6,182,212,0.6)]"
        >
          <Terminal className="w-5 h-5" />
          <span className="text-lg">Get Early Access</span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>

        <div className="text-sm text-zinc-500 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>Open-source release incoming</span>
        </div>
      </motion.div>

      {/* CSS-only Ghost UI 2.0 (Approval Checklist) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
        className="w-full max-w-5xl mx-auto mt-20 text-left relative"
      >
        <div className="w-full overflow-x-auto pb-8 -mx-6 px-6 sm:mx-0 sm:px-0 scrollbar-hide">
          <div className="relative rounded-[2rem] bg-[#0A0A0A] border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] shadow-cyan-500/10 flex flex-col h-[500px] min-w-[800px]">
            {/* Title Bar */}
            <div className="h-12 bg-white/[0.02] border-b border-white/5 flex items-center px-4 gap-4 relative shrink-0 rounded-t-[2rem]">
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="text-sm">🦜</span>
                <span className="text-sm font-semibold tracking-wide">MACAW // EXECUTION PLANNER</span>
              </div>
            </div>
            
            {/* Main Layout */}
            <div className="flex flex-1 overflow-hidden rounded-b-[2rem]">
              {/* Sidebar Mission Context */}
              <div className="w-72 bg-white/[0.01] border-r border-white/5 p-6 flex flex-col gap-6 shrink-0">
                <div>
                  <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Active Mission</div>
                  <div className="text-sm text-zinc-300 leading-relaxed font-medium">
                    "Clean up the spam folder and unsubscribe from promotional emails over the last 30 days."
                  </div>
                </div>
                
                <div>
                  <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Agent Status</div>
                  <div className="flex items-center gap-2 text-sm text-amber-400 bg-amber-400/10 px-3 py-2 rounded-lg border border-amber-400/20">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                    <span>Waiting for Human Approval</span>
                  </div>
                </div>
              </div>
              
              {/* Approval Checklist Area */}
              <div className="flex-1 bg-black p-8 flex flex-col overflow-y-auto relative">
                 <h3 className="text-xl font-semibold text-white mb-6">Proposed Execution Plan</h3>
                 
                 <div className="flex flex-col gap-3 mb-8">
                   {/* Step 1 (Completed Planning) */}
                   <motion.div 
                     initial={{ opacity: 0, x: -10 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.3 }}
                     className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5"
                   >
                     <CheckSquare className="w-5 h-5 text-zinc-500 mt-0.5 shrink-0" />
                     <div>
                       <div className="text-zinc-200 font-medium text-sm">Open Apple Mail and navigate to Inbox</div>
                       <div className="text-zinc-500 text-xs mt-1">Found application and brought window to front.</div>
                     </div>
                   </motion.div>

                   {/* Step 2 (Completed Planning) */}
                   <motion.div 
                     initial={{ opacity: 0, x: -10 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.3, delay: 0.1 }}
                     className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5"
                   >
                     <CheckSquare className="w-5 h-5 text-zinc-500 mt-0.5 shrink-0" />
                     <div>
                       <div className="text-zinc-200 font-medium text-sm">Filter for emails matching 'unsubscribe' in the last 30 days</div>
                       <div className="text-zinc-500 text-xs mt-1">Identified 42 matching promotional emails.</div>
                     </div>
                   </motion.div>

                   {/* Step 3 (Pending Approval) */}
                   <motion.div 
                     initial={{ opacity: 0, x: -10 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.3, delay: 0.2 }}
                     className="flex items-start gap-4 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30"
                   >
                     <Square className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                     <div>
                       <div className="text-white font-medium text-sm">Click 'Unsubscribe' via macOS Data Detectors and move all 42 to Trash</div>
                       <div className="text-cyan-400 text-xs mt-1">Critical Action: State modification detected. Waiting for approval.</div>
                     </div>
                   </motion.div>
                 </div>

                 {/* Approval CTA */}
                 <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5, delay: 0.5 }}
                   className="mt-auto flex items-center justify-between p-6 rounded-2xl bg-zinc-900/50 border border-white/10"
                 >
                   <div className="text-sm text-zinc-400">
                     Review the steps above. The agent will execute exactly as planned.
                   </div>
                   <div className="flex gap-3">
                     <button className="px-5 py-2.5 rounded-xl bg-white/5 text-zinc-300 text-sm font-medium hover:bg-white/10 transition-colors border border-white/5">
                       Reject Plan
                     </button>
                     <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-cyan-500 text-black text-sm font-bold hover:bg-cyan-400 transition-colors shadow-[0_0_20px_-5px_var(--color-cyan-500)] active:scale-95">
                       <ThumbsUp className="w-4 h-4" /> Approve & Execute
                     </button>
                   </div>
                 </motion.div>

              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
