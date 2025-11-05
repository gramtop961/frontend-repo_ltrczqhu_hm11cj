import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: 'Fintech Onboarding Revamp',
    tag: 'Mobile • UX Flow',
    summary: 'Reduced drop-off by 28% with clearer KYC and progressive disclosure.',
    problem: 'Users were abandoning onboarding due to unclear verification steps and friction-heavy forms.',
    research: 'Conducted 12 user interviews and a 150-user survey. Identified confusion around KYC terminology and photo ID capture.',
    solution: 'Introduced step-wise progress, inline guidance, and auto-capture for documents. Added success micro-interactions.',
    outcomes: ['28% higher completion', 'NPS +12 after redesign', 'Support tickets down 35%'],
    link: '#',
  },
  {
    id: 2,
    title: 'Wellness Tracker Dashboard',
    tag: 'Web • Design System',
    summary: 'Built a scalable component library with accessible charts and dark mode.',
    problem: 'Inconsistent UI and accessibility issues across modules created learning friction.',
    research: 'Audited existing components, ran heuristic evaluation, and interviewed power users.',
    solution: 'Created a token-based design system with modular cards, chart patterns, and keyboard-first navigation.',
    outcomes: ['Build time reduced 30%', 'WCAG AA compliance', 'Support docs shrink by 40%'],
    link: '#',
  },
  {
    id: 3,
    title: 'Travel Booking Flow',
    tag: 'Mobile • Interaction',
    summary: 'Introduced glanceable pricing and refined filters for faster decision-making.',
    problem: 'Users struggled comparing options and felt uncertain about final costs.',
    research: 'Analyzed funnel analytics and ran usability tests with 8 travelers.',
    solution: 'Added price badges, fee transparency, and a sticky comparison tray with haptics.',
    outcomes: ['Time to book -22%', 'Conversion +9%', 'Support calls down 18%'],
    link: '#',
  },
];

function ProjectCard({ project, onOpen }) {
  return (
    <motion.button
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onOpen(project)}
      className="group relative overflow-hidden rounded-3xl border border-white/40 bg-white/60 p-5 text-left shadow-lg backdrop-blur-md transition dark:border-white/10 dark:bg-zinc-900/60"
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-violet-500/10 via-fuchsia-500/10 to-teal-400/10 opacity-0 transition group-hover:opacity-100" />
      <div className="aspect-[16/10] w-full rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700" />
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{project.title}</h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">{project.tag}</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 text-xs text-zinc-700 backdrop-blur-md transition group-hover:bg-white/90 dark:bg-zinc-800/70 dark:text-zinc-200">View <ExternalLink size={14} /></span>
      </div>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{project.summary}</p>
    </motion.button>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-zinc-900 md:text-4xl dark:text-zinc-50">Featured Projects</h2>
          <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-300">Case studies that blend usability, storytelling, and business outcomes.</p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={setActive} />)
        )}
      </div>

      {/* Modal for case study details */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-zinc-900/50" onClick={() => setActive(null)} />
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 16 }}
              className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-white/90 backdrop-blur-xl dark:bg-zinc-900/90"
            >
              <div className="relative h-44 w-full bg-gradient-to-r from-violet-500/30 via-fuchsia-500/30 to-teal-400/30" />
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{active.title}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{active.tag}</p>
                  </div>
                  <button onClick={() => setActive(null)} className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700">Close</button>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-medium text-zinc-800 dark:text-zinc-100">Problem</h4>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{active.problem}</p>
                    <h4 className="mt-4 font-medium text-zinc-800 dark:text-zinc-100">Research & Personas</h4>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{active.research}</p>
                    <h4 className="mt-4 font-medium text-zinc-800 dark:text-zinc-100">Wireframes → Final</h4>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{active.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-800 dark:text-zinc-100">Outcomes</h4>
                    <ul className="mt-2 list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-300">
                      {active.outcomes.map((o) => (
                        <li key={o}>{o}</li>
                      ))}
                    </ul>
                    <a href={active.link} className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-teal-400 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:brightness-110">
                      Open Prototype <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
