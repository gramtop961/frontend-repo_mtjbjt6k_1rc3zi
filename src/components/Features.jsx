import { motion } from 'framer-motion'
import { Sparkles, Workflow, ShieldCheck, Gauge } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'MacOS polish',
    desc: 'Subtle motion, glass surfaces, and tactile controls designed with care.'
  },
  {
    icon: Workflow,
    title: 'Flow-first',
    desc: 'Keyboard-driven interactions that keep you in the zone.'
  },
  {
    icon: ShieldCheck,
    title: 'Private by default',
    desc: 'Secure storage and transparent data controls you can trust.'
  },
  {
    icon: Gauge,
    title: 'Blazing fast',
    desc: 'Lightweight foundations for instant feedback and low latency.'
  }
]

export default function Features() {
  return (
    <section id="features" className="bg-[#0a0a0a] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-semibold text-white"
        >
          Designed for deep work
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200"
            >
              <f.icon className="text-white" />
              <h3 className="mt-3 text-lg font-medium text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
