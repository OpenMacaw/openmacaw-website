import React from 'react';
import { motion } from 'motion/react';
import { Github, Scale, Star } from 'lucide-react';

export function DeveloperTrustBar() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      className="max-w-4xl mx-auto mb-32"
    >
      <div className="rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-md p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-3 text-sm text-zinc-400">
          <Scale className="w-4 h-4 text-zinc-500" />
          <span>Licensed under <strong className="text-zinc-200 font-medium">Apache 2.0</strong></span>
        </div>

        <div className="h-px sm:h-8 w-full sm:w-px bg-white/5"></div>

        <a 
          href="https://github.com/openmacaw/openmacaw" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 group px-4 py-2 rounded-xl hover:bg-white/5 transition-colors"
        >
          <div className="flex items-center gap-2 text-zinc-200 font-medium">
            <Github className="w-5 h-5" />
            <span>Star on GitHub</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 text-xs text-zinc-300 font-medium border border-white/5 group-hover:bg-white/15 transition-colors">
            <Star className="w-3 h-3 fill-current" />
            <span>4.2k</span>
          </div>
        </a>

      </div>
    </motion.section>
  );
}
