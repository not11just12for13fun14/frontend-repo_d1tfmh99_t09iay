import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  // Magnetic cursor effect
  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.className = 'fixed z-50 pointer-events-none hidden md:block'
    cursor.innerHTML = '<div class="h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-500/40 to-indigo-500/40 blur-sm border border-white/70 backdrop-blur"></div>'
    document.body.appendChild(cursor)

    const move = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }
    window.addEventListener('mousemove', move)

    // Magnetic hover for elements with data-cursor
    const targets = Array.from(document.querySelectorAll('[data-cursor]'))
    const enter = (e) => {
      cursor.firstChild.style.transform = 'scale(1.4) translate(-35%, -35%)'
    }
    const leave = () => {
      cursor.firstChild.style.transform = 'scale(1) translate(-50%, -50%)'
    }
    targets.forEach(el => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      targets.forEach(el => {
        el.removeEventListener('mouseenter', enter)
        el.removeEventListener('mouseleave', leave)
      })
      cursor.remove()
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-slate-100 text-slate-900">
      {/* Global subtle radial glow */}
      <div className="pointer-events-none fixed inset-0 [background:radial-gradient(60%_40%_at_50%_0%,rgba(99,102,241,0.12),transparent)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-slate-500">© {new Date().getFullYear()} Dasari Venkata Prasanna Kumar • Crafted with care</footer>
    </div>
  )
}

export default App
