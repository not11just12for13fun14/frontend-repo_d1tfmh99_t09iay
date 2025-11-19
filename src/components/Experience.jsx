import { motion } from 'framer-motion'

const items = [
  {
    title: 'Full-Stack Developer Intern',
    org: 'Innovative Labs',
    period: 'Jun 2024 — Present',
    points: [
      'Built end-to-end features across React, Node.js, and MongoDB',
      'Improved Lighthouse performance by 35% with code-splitting and image optimization',
    ],
  },
  {
    title: 'Open Source Contributor',
    org: 'Multiple Projects',
    period: '2023 — Present',
    points: [
      'Contributed to UI kits and developer tooling in JS ecosystem',
      'Wrote documentation and triaged issues for community packages',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Experience</h2>
          <p className="text-slate-600 mt-1">A quick look at my journey so far</p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-slate-300 via-slate-200 to-transparent" />
          <div className="space-y-8">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`relative grid md:grid-cols-2 gap-6 ${i % 2 === 0 ? '' : 'md:direction-rtl'}`}
              >
                <div className={`md:col-start-${(i % 2) + 1} bg-white/60 backdrop-blur-xl border border-white/70 rounded-2xl p-6 shadow-[0_10px_40px_rgba(2,6,23,0.08)]`}>
                  <div className="text-sm text-slate-600 mb-1">{item.period}</div>
                  <div className="font-semibold text-slate-900">{item.title}</div>
                  <div className="text-slate-700">{item.org}</div>
                  <ul className="mt-3 space-y-2 list-disc list-inside text-slate-700">
                    {item.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
