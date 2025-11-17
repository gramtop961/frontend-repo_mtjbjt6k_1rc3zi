import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] pt-24 overflow-hidden bg-[#0a0a0a]">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80 pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl font-semibold tracking-tight text-white"
            >
              Fluxo
              <span className="text-white/60">.no</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-4 text-lg sm:text-xl text-slate-300"
            >
              MacOS-inspired workspace tools that feel delightful, minimal, and fast.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="mt-8 flex items-center gap-3"
            >
              <a href="#waitlist" className="inline-flex items-center justify-center rounded-xl bg-white text-black px-5 py-3 text-sm font-medium shadow-[0_0_0_1px_rgba(255,255,255,.1)_inset,0_8px_20px_rgba(0,0,0,.6)] hover:opacity-90 transition">
                Join waitlist
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white px-5 py-3 text-sm font-medium border border-white/10 hover:bg-white/15 transition">
                Explore features
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
