import { useState } from 'react'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section id="waitlist" className="bg-[#0a0a0a] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-white">Get early access</h3>
              <p className="mt-2 text-slate-300">Join the waitlist to be first in line when we open the doors.</p>
            </div>
            <form onSubmit={onSubmit} className="flex w-full md:w-auto items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex-1 md:w-80 rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-white/20"
              />
              <button
                className="rounded-xl bg-white text-black px-5 py-3 text-sm font-medium shadow-[0_0_0_1px_rgba(255,255,255,.1)_inset,0_8px_20px_rgba(0,0,0,.6)] hover:opacity-90 transition"
              >
                {submitted ? 'Added ✅' : 'Join'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
