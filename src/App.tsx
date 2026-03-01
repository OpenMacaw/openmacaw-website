import React from 'react';
import { Github, Twitter } from 'lucide-react';

import { HeroWaitlist } from './components/HeroWaitlist';
import { DeveloperTrustBar } from './components/DeveloperTrustBar';
import { WhySection } from './components/WhySection';
import { FeatureBento } from './components/FeatureBento';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-50 selection:bg-cyan-500/30 selection:text-white overflow-hidden font-sans">
      {/* Background Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center items-start">
        <div className="w-[800px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] opacity-40 translate-y-[-40%]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold tracking-tight text-lg">
            <span className="text-xl">🦜</span>
            <span className="text-white">OpenMacaw</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-zinc-400">
            <a href="https://github.com/openmacaw/openmacaw" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Twitter className="w-4 h-4" />
              <span className="hidden sm:inline">X/Twitter</span>
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-24 mx-auto">
        <HeroWaitlist />
        <DeveloperTrustBar />
        <WhySection />
        <FeatureBento />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="text-xl">🦜</span>
            <span className="font-medium">© 2026 OpenMacaw</span>
          </div>
          <p className="text-sm text-zinc-600 text-center md:text-left font-light">
            Built for precision. Designed for safety.
          </p>
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <a href="https://github.com/openmacaw/openmacaw" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

