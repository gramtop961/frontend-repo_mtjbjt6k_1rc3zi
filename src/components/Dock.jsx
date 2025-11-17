import { useState } from 'react'
import { Home, Rocket, Mail, MessageSquare, Settings, Star, Image as ImageIcon } from 'lucide-react'

const apps = [
  { name: 'Finder', icon: Home },
  { name: 'Launchpad', icon: Rocket },
  { name: 'Mail', icon: Mail },
  { name: 'Messages', icon: MessageSquare },
  { name: 'Photos', icon: ImageIcon },
  { name: 'Settings', icon: Settings },
  { name: 'Favorites', icon: Star }
]

export default function Dock() {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center">
      <div className="pointer-events-auto flex items-end gap-2 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-3 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        {apps.map((app, i) => {
          const Icon = app.icon
          const active = hovered === i
          return (
            <div
              key={app.name}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative flex flex-col items-center"
            >
              <button
                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-black/30 ring-1 ring-white/10 text-white transition-transform duration-150 hover:bg-black/40 ${active ? 'scale-110' : 'scale-100'}`}
                title={app.name}
              >
                <Icon size={22} />
              </button>
              <div className={`mt-1 text-[10px] text-white/80 transition-opacity ${active ? 'opacity-100' : 'opacity-0'}`}>{app.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
