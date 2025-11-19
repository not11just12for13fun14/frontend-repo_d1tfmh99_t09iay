import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl md:text-3xl font-bold text-slate-900">Let’s build something great</motion.h3>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-3 text-slate-600">Have an idea or opportunity? I’m available for internships, freelance, and collaborations.</motion.p>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-8 inline-flex gap-3">
          <a href="mailto:someone@example.com" className="px-5 py-3 rounded-xl bg-slate-900 text-white shadow-[0_10px_40px_rgba(15,23,42,0.25)] hover:shadow-[0_12px_48px_rgba(15,23,42,0.35)] transition-all" data-cursor>Send Email</a>
          <a href="#" className="px-5 py-3 rounded-xl bg-white/60 backdrop-blur-md border border-white/70 text-slate-900 hover:bg-white/70 transition-colors" data-cursor>Download Resume</a>
        </motion.div>
      </div>
    </section>
  )
}
