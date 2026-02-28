import React from 'react';
import { motion } from 'motion/react';
import { Box, Cpu } from 'lucide-react';

export function WhySection() {
  return (
    <section className="max-w-5xl mx-auto mb-40 px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
          A Paradigm Shift in Automation
        </h2>
        <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto font-light">
          We rebuilt the agent framework from the ground up for Apple Silicon. 
          No heavy containers, no web wrappers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {/* The Old Way */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl"></div>
          <div className="mb-8 p-3 rounded-2xl bg-zinc-900 border border-zinc-800 inline-block">
            <Box className="w-6 h-6 text-zinc-500" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-zinc-300">The Old Way</h3>
          <ul className="space-y-4 text-zinc-500">
            <li className="flex items-start gap-3">
              <span className="text-red-500/50 mt-1">✗</span>
              <span>Electron wrappers chewing through RAM</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500/50 mt-1">✗</span>
              <span>Docker containers required for basic tasks</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500/50 mt-1">✗</span>
              <span>Slow, generic UI components</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500/50 mt-1">✗</span>
              <span>Cloud APIs for vision and interaction</span>
            </li>
          </ul>
        </motion.div>

        {/* The Macaw Way */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-2xl shadow-indigo-500/5"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors duration-700"></div>
          <div className="mb-8 p-3 rounded-2xl bg-white/10 border border-white/10 inline-block shadow-inner">
            <Cpu className="w-6 h-6 text-indigo-400" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-white">The Macaw Way</h3>
          <ul className="space-y-4 text-zinc-300">
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 mt-1">✓</span>
              <span>SwiftUI native interface (Zero Electron)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 mt-1">✓</span>
              <span>Runs as a lightweight macOS daemon</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 mt-1">✓</span>
              <span>Apple Accessibility hooks for instantaneous interaction</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 mt-1">✓</span>
              <span>Local MLX inference—your data never leaves the device</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
