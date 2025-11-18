import { motion } from 'framer-motion';
import { Sparkles, Layout, Rocket } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Brand & Websites',
    desc: 'Elegant, minimalist marketing sites with immersive motion and crisp typography.'
  },
  {
    icon: Layout,
    title: 'Product UI',
    desc: 'Design systems and high-performance interfaces for complex digital products.'
  },
  {
    icon: Rocket,
    title: 'Prototyping & Motion',
    desc: 'Interactive prototypes, micro-interactions, and smooth animations that feel native.'
  },
];

function Services() {
  return (
    <section id="services" className="relative z-10 bg-slate-950 text-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold tracking-tight"
        >
          Что мы делаем
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur-sm hover:border-white/20"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-500/20 p-2 ring-1 ring-inset ring-blue-400/30">
                  <s.icon className="h-5 w-5 text-blue-300" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-blue-200/90">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
