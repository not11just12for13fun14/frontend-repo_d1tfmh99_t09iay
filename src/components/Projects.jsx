import { motion } from 'framer-motion'

const projects = [
  {
    title: 'NeoPay – Fintech Dashboard',
    desc: 'A 3D‑infused fintech dashboard with real‑time charts and glassmorphism UI.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1619590530232-da98a822baa5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZW9QYXklMjAlRTIlODAlOTMlMjBGaW50ZWNoJTIwRGFzaGJvYXJkfGVufDB8MHx8fDE3NjM1MzkzMjd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'AuraUI – Component Library',
    desc: 'Minimal, iOS‑inspired React components with accessibility baked in.',
    tags: ['React', 'TypeScript', 'Radix'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1688110395685-ce24e1949bca?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBdXJhVUklMjAlRTIlODAlOTMlMjBDb21wb25lbnQlMjBMaWJyYXJ5fGVufDB8MHx8fDE3NjM1MzkzMjh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'PathFinder – Visualizer',
    desc: 'Interactive pathfinding visualizer for algorithms like A*, Dijkstra.',
    tags: ['Vite', 'Canvas', 'Algorithms'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Projects</h2>
          <p className="text-slate-600 mt-1">Selected work showcasing product thinking and craft</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xl border border-white/70 shadow-[0_10px_40px_rgba(2,6,23,0.06)] hover:shadow-[0_14px_60px_rgba(2,6,23,0.12)] focus:ring-2 ring-slate-900/10"
            >
              <div className="relative h-44">
                <img src={p.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
              </div>
              <div className="p-5">
                <div className="font-semibold text-slate-900">{p.title}</div>
                <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="px-2 py-1 rounded-lg bg-white/70 border border-white/80 text-xs text-slate-700">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
