import { motion } from 'framer-motion'
import { Code2, Database, Layers, Braces, Cloud, Cpu, Server, Smartphone } from 'lucide-react'

const skills = [
  { icon: Code2, label: 'React / Next.js' },
  { icon: Database, label: 'MongoDB / Prisma' },
  { icon: Layers, label: 'Node.js / Express' },
  { icon: Braces, label: 'TypeScript' },
  { icon: Cloud, label: 'AWS / Vercel' },
  { icon: Cpu, label: 'Data Structures' },
  { icon: Server, label: 'FastAPI' },
  { icon: Smartphone, label: 'Responsive Design' },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Skills</h2>
          <p className="text-slate-600 mt-1">Tools and technologies I work with</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group p-5 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/70 shadow-[0_10px_40px_rgba(2,6,23,0.06)] hover:shadow-[0_14px_60px_rgba(2,6,23,0.12)] transition-all flex items-center gap-3"
            >
              <div className="h-10 w-10 rounded-xl grid place-items-center bg-gradient-to-br from-blue-500/20 to-indigo-500/20 text-slate-800">
                <Icon className="h-5 w-5" />
              </div>
              <div className="font-medium text-slate-800">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
