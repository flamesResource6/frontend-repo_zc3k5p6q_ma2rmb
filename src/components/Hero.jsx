import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient aura overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_20%,rgba(59,130,246,0.20),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200 backdrop-blur">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            Future Industry • Design-first development studio
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Futuristic digital products with motion at the core
          </h1>
          <p className="mt-5 max-w-xl text-blue-200/90">
            We craft interactive, minimalist experiences that feel alive. From brand websites to complex apps – we focus on precision, speed, and animation.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400">
              Start a project
            </a>
            <a href="#portfolio" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10">
              See our work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
