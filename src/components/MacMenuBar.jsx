import { useState, useEffect } from 'react'
import { Apple, Search, ChevronDown } from 'lucide-react'

function Clock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const update = () => {
      const now = new Date()
      const opts = { weekday: 'short', hour: '2-digit', minute: '2-digit' }
      setTime(now.toLocaleString(undefined, opts))
    }
    update()
    const id = setInterval(update, 30_000)
    return () => clearInterval(id)
  }, [])
  return <span className="text-slate-200/90 text-sm tabular-nums">{time}</span>
}

export default function MacMenuBar() {
  return (
    <div className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-2xl bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 border border-white/10">
          <div className="flex items-center justify-between px-4 py-2">
            {/* Left side */}
            <div className="flex items-center gap-3 text-slate-200">
              <Apple size={18} className="text-slate-100" />
              <button className="text-sm hover:text-white">Fluxo</button>
              <button className="text-sm hover:text-white">File</button>
              <button className="text-sm hover:text-white">Edit</button>
              <button className="text-sm hover:text-white">View</button>
              <button className="text-sm hover:text-white">Window</button>
              <button className="text-sm hover:text-white">Help</button>
            </div>
            {/* Center app title like macOS */}
            <div className="hidden md:block text-xs text-slate-300">Fluxo — macOS Mode</div>
            {/* Right side */}
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-white">
                <span>Products</span>
                <ChevronDown size={14} />
              </button>
              <button className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-white">
                <span>Company</span>
                <ChevronDown size={14} />
              </button>
              <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-md px-2 py-1 text-slate-300">
                <Search size={14} />
                <input
                  placeholder="Spotlight"
                  className="bg-transparent outline-none text-xs placeholder:text-slate-400 w-28"
                />
              </div>
              <Clock />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
