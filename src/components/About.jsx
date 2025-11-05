import { motion } from 'framer-motion';

const process = [
  { title: 'Research', desc: 'Understand users, market, and context through qualitative and quantitative insights.' },
  { title: 'Wireframing', desc: 'Translate insights into information architecture and low-fidelity flows.' },
  { title: 'Prototyping', desc: 'Bring ideas to life with interactive prototypes for real feedback.' },
  { title: 'Testing', desc: 'Validate usability, iterate on pain points, refine interactions.' },
  { title: 'Iteration', desc: 'Polish visuals, micro-interactions, and accessibility for production.' },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto grid items-center gap-10 md:grid-cols-2">
        {/* Avatar / Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto aspect-square w-64 rounded-[2rem] border border-white/40 bg-gradient-to-br from-violet-200 via-fuchsia-100 to-teal-100 p-1 shadow-xl dark:border-white/10 dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-800"
        >
          <div className="h-full w-full rounded-[1.8rem] bg-white/70 backdrop-blur-md dark:bg-zinc-900/70" />
          <div className="pointer-events-none absolute -inset-0.5 rounded-[2rem] bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-teal-400/20 blur-xl" />
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-zinc-900 md:text-4xl dark:text-zinc-50">About Me</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">
            I’m Jayant, a product-focused UI/UX designer blending systems thinking with delightful micro-interactions. My tools of choice include Figma, Framer, and motion tools to craft experiences that are both intuitive and memorable.
          </p>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            I partner with startups and product teams to ship accessible, scalable design systems and story-driven case studies.
          </p>

          <div className="mt-8 grid gap-4">
            {process.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.05 * idx, duration: 0.5 }}
                className="rounded-2xl border border-white/40 bg-white/60 p-4 backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/60"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">{step.title}</h3>
                  <span className="h-1.5 w-20 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-teal-400" />
                </div>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
