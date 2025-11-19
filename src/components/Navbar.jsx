import { useEffect, useState } from 'react'
import { Menu, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[94%] md:w-[86%] lg:w-[70%] transition-all ${
      scrolled ? 'backdrop-blur-xl bg-white/50 border border-white/60 shadow-[0_10px_40px_rgba(31,41,55,0.08)]' : 'backdrop-blur-md bg-white/30 border border-white/40'
    } rounded-2xl`}
    >
      <div className="px-4 md:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500/80 to-indigo-500/80 shadow-[0_0_30px_rgba(99,102,241,0.5)]" />
          <span className="font-semibold tracking-tight text-slate-900">Prasanna Kumar</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#experience" className="hover:text-slate-900 transition-colors" data-cursor>Experience</a>
          <a href="#skills" className="hover:text-slate-900 transition-colors" data-cursor>Skills</a>
          <a href="#projects" className="hover:text-slate-900 transition-colors" data-cursor>Projects</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors" data-cursor>Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-xl hover:bg-white/60 transition-colors" aria-label="GitHub" data-cursor>
            <Github className="h-5 w-5 text-slate-800" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-xl hover:bg-white/60 transition-colors" aria-label="LinkedIn" data-cursor>
            <Linkedin className="h-5 w-5 text-slate-800" />
          </a>
          <a href="#contact" className="p-2 rounded-xl hover:bg-white/60 transition-colors" aria-label="Email" data-cursor>
            <Mail className="h-5 w-5 text-slate-800" />
          </a>
          <button className="md:hidden p-2 rounded-xl hover:bg-white/60" aria-label="Menu" data-cursor>
            <Menu className="h-5 w-5 text-slate-800" />
          </button>
        </div>
      </div>
    </div>
  )
}
