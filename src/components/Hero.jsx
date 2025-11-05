import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero({ onViewWork, onConnect }) {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-white via-white to-violet-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-950">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient mask on top to ensure readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/80 dark:from-zinc-900/70 dark:via-zinc-900/30 dark:to-zinc-900/80" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md/40 rounded-3xl border border-white/40 bg-white/40 p-6 shadow-xl shadow-zinc-900/5 dark:border-white/10 dark:bg-zinc-900/40"
        >
          <span className="inline-block rounded-full bg-gradient-to-r from-violet-500/20 to-teal-400/20 px-4 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-200">
            Portfolio 2025 • Minimal, Glassy, Elegant
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-8 text-4xl font-black leading-[1.1] text-zinc-800 sm:text-5xl md:text-6xl lg:text-7xl dark:text-zinc-50"
        >
          Hi, I’m Jayant — a UI/UX Designer crafting
          <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-teal-400 bg-clip-text text-transparent"> user-centered </span>
          digital experiences.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto mt-5 max-w-3xl text-base text-zinc-600 sm:text-lg dark:text-zinc-300"
        >
          I design intuitive, elegant, and meaningful interfaces for mobile and web.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={onViewWork}
            className="group rounded-full border border-white/40 bg-white/70 px-6 py-3 text-sm font-semibold text-zinc-800 backdrop-blur-md transition hover:bg-white/90 dark:border-white/10 dark:bg-zinc-800/70 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            View Work
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </button>
          <button
            onClick={onConnect}
            className="rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-teal-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:brightness-110"
          >
            Let’s Connect
          </button>
        </motion.div>

        {/* Subtle micro indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {["Research", "Wireframing", "Prototyping", "Testing"].map((step) => (
            <div
              key={step}
              className="rounded-2xl border border-white/40 bg-white/40 p-3 text-sm text-zinc-700 backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/40 dark:text-zinc-200"
            >
              <div className="flex items-center justify-between">
                <span>{step}</span>
                <span className="h-2 w-2 animate-pulse rounded-full bg-gradient-to-r from-violet-500 to-teal-400" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
