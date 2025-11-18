import { motion } from 'framer-motion';

const works = [
  {
    title: 'NeuroPay',
    tags: ['Fintech', '3D', 'Web App'],
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Void Studio',
    tags: ['Brand', 'Landing', 'Motion'],
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'PulseOS',
    tags: ['SaaS', 'Dashboard', 'System'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop'
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="relative z-10 bg-slate-950 text-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold tracking-tight"
        >
          Портфолио
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w, i) => (
            <motion.a
              key={w.title}
              href="#contact"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img src={w.image} alt={w.title} className="h-52 w-full object-cover opacity-90 transition group-hover:scale-105 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-sm text-blue-200/90">{w.tags.join(' • ')}</div>
                <div className="text-lg font-semibold">{w.title}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
