import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Command, Sparkles, Cpu, Zap, Github, Twitter, ChevronRight } from 'lucide-react';

export default function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // In a real app, send to backend
    }
  };

  return (
    <div className="min-h-screen bg-black text-zinc-50 selection:bg-zinc-800 selection:text-white overflow-hidden">
      {/* Background Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center items-start">
        <div className="w-[800px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] opacity-50 translate-y-[-50%]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold tracking-tight text-lg">
            <Command className="w-5 h-5" />
            <span>OpenMacaw</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-zinc-400">
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub Repo</span>
            </a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Twitter className="w-4 h-4" />
              <span className="hidden sm:inline">X/Twitter</span>
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center pt-12 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Coming soon to macOS</span>
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
            The macOS-native, Apple Silicon optimized fork of OpenClaw. No Electron bloat. Just pure, unadulterated performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="w-full max-w-md"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-5 pr-36 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 bg-white text-black font-medium rounded-xl px-5 hover:bg-zinc-200 transition-colors flex items-center gap-1"
                >
                  Join Waitlist
                </button>
              </form>
            ) : (
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-2xl py-4 px-5 font-medium flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                You're on the list. We'll be in touch.
              </div>
            )}
            <div className="mt-4 text-sm text-zinc-500 flex items-center justify-center gap-4">
              <a href="#" className="hover:text-zinc-300 transition-colors flex items-center gap-1">
                Join the Discord <ChevronRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Mockup Image Placeholder */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="mb-32 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent blur-3xl -z-10 rounded-[3rem]"></div>
          <div className="aspect-video max-w-5xl mx-auto rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/50 relative">
            {/* macOS Window Controls */}
            <div className="h-12 border-b border-white/5 flex items-center px-4 gap-2 bg-white/[0.02]">
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
            </div>
            {/* Abstract App Content */}
            <div className="absolute inset-0 top-12 p-8 flex flex-col">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
                  alt="Abstract macOS Wallpaper" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Fake UI Elements */}
                <div className="absolute bottom-8 left-8 right-8 flex gap-4">
                  <div className="w-64 h-40 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-5 flex flex-col gap-3">
                    <div className="w-1/2 h-4 bg-white/20 rounded-full"></div>
                    <div className="w-3/4 h-3 bg-white/10 rounded-full"></div>
                    <div className="w-5/6 h-3 bg-white/10 rounded-full"></div>
                    <div className="mt-auto w-full h-10 bg-indigo-500/80 rounded-lg"></div>
                  </div>
                  <div className="flex-1 h-40 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-5 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/10"></div>
                      <div className="w-32 h-4 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-2 bg-white/10 rounded-full"></div>
                      <div className="w-full h-2 bg-white/10 rounded-full"></div>
                      <div className="w-2/3 h-2 bg-white/10 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Feature Grid (Bento Box) */}
        <section className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Built for the Mac.</h2>
            <p className="text-zinc-400 text-lg">No compromises. Designed to feel like it belongs on your desktop.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 rounded-3xl bg-zinc-900/50 border border-white/5 p-8 flex flex-col relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors duration-500"></div>
              <Cpu className="w-8 h-8 text-indigo-400 mb-6" />
              <h3 className="text-2xl font-semibold mb-3">Apple Silicon Native</h3>
              <p className="text-zinc-400 leading-relaxed max-w-md">
                Optimized for MLX. OpenMacaw runs local models with blazing speed, utilizing the full power of your M-series chip without draining your battery.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl bg-zinc-900/50 border border-white/5 p-8 flex flex-col relative overflow-hidden group"
            >
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-colors duration-500"></div>
              <Zap className="w-8 h-8 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-3">SwiftUI UI</h3>
              <p className="text-zinc-400 leading-relaxed">
                Zero Electron bloat. A lightweight, native interface that feels instantly familiar.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-3 rounded-3xl bg-zinc-900/50 border border-white/5 p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-8 relative overflow-hidden group"
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="flex-1 z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 mb-6">
                  <Command className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-semibold mb-4">The Parrot Engine</h3>
                <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                  Automates your workflows via macOS Accessibility APIs. It watches, learns, and natively parrots your actions across any application.
                </p>
              </div>
              <div className="w-full sm:w-1/3 aspect-square rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center z-10 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop" 
                  alt="Abstract Workflow" 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <Command className="w-16 h-16 text-white/80 drop-shadow-2xl relative z-10" />
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-zinc-400">
            <Command className="w-5 h-5" />
            <span className="font-medium">© 2026 OpenMacaw</span>
          </div>
          <p className="text-sm text-zinc-600 text-center md:text-left">
            An open-source project. Not affiliated with Apple Inc.
          </p>
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
