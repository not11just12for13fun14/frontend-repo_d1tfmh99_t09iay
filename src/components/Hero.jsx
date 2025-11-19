import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 400], [0, -80])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8])

  return (
    <section className="relative pt-28 md:pt-32 pb-24 overflow-hidden" id="home">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-indigo-500/20 to-fuchsia-500/20 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div style={{ y, opacity }} className="relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/70 shadow-sm text-slate-700 mb-5" data-cursor>
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-sm">Open to opportunities</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Dasari Venkata Prasanna Kumar
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-xl">
            Full‑Stack Developer & Computer Science Undergraduate. I craft delightful, high‑performance web experiences with modern stacks and elegant UI.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="px-5 py-3 rounded-xl bg-slate-900 text-white shadow-[0_10px_40px_rgba(15,23,42,0.25)] hover:shadow-[0_12px_48px_rgba(15,23,42,0.35)] transition-all" data-cursor>
              View Projects
            </a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white/60 backdrop-blur-md border border-white/70 text-slate-900 hover:bg-white/70 transition-colors" data-cursor>
              Contact Me
            </a>
          </div>
          <div className="mt-6 flex items-center gap-3 text-sm text-slate-600">
            <span className="px-3 py-1 rounded-full bg-white/60 backdrop-blur border border-white/70">Hyderabad, India</span>
            <span className="px-3 py-1 rounded-full bg-white/60 backdrop-blur border border-white/70">Remote Friendly</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="relative h-[420px] md:h-[520px] rounded-3xl overflow-hidden border border-white/60 bg-white/40 backdrop-blur-xl shadow-[0_15px_60px_rgba(2,6,23,0.08)]">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
