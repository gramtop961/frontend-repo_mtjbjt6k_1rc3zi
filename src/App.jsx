import MacMenuBar from './components/MacMenuBar'
import Hero from './components/Hero'
import Features from './components/Features'
import Waitlist from './components/Waitlist'
import Dock from './components/Dock'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <MacMenuBar />
      <Hero />
      <Features />
      <Waitlist />
      <Dock />
      <footer className="bg-[#0a0a0a] py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <div className="text-sm">© {new Date().getFullYear()} Fluxo. All rights reserved.</div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
