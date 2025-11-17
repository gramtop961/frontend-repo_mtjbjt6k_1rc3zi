import { useState } from 'react'
import { Minus, Square, X } from 'lucide-react'

export default function Window({ title = 'Fluxo — Notes', children }) {
  const [focused, setFocused] = useState(true)
  return (
    <div
      onMouseDown={() => setFocused(true)}
      className={`mx-auto mt-8 w-full max-w-4xl overflow-hidden rounded-2xl border bg-white/5 backdrop-blur-xl ${focused ? 'border-white/15 shadow-[0_10px_50px_rgba(0,0,0,0.5)]' : 'border-white/10'}`}
    >
      <div className="flex items-center justify-between bg-gradient-to-b from-white/10 to-white/[0.06] px-4 py-2">
        {/* traffic lights */}
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57] ring-1 ring-black/30" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e] ring-1 ring-black/30" />
          <span className="h-3 w-3 rounded-full bg-[#28c840] ring-1 ring-black/30" />
        </div>
        <div className="text-xs text-slate-200">{title}</div>
        <div className="flex items-center gap-2 text-slate-300">
          <Minus size={14} />
          <Square size={12} />
          <X size={14} />
        </div>
      </div>
      <div className="p-4 text-slate-200">
        {children}
      </div>
    </div>
  )
}
