import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Sun, Moon, ArrowRight } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState('system');

  // Theme handling with localStorage
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const next = stored || (prefersDark ? 'dark' : 'light');
    setTheme(next);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 transition-colors dark:bg-zinc-950 dark:text-zinc-50">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-40">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between rounded-2xl border border-white/40 bg-white/60 px-4 py-3 backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/60">
            <a href="#home" className="font-semibold tracking-tight">Jayant<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-500 to-teal-400">.design</span></a>
            <nav className="hidden gap-6 text-sm text-zinc-700 md:flex dark:text-zinc-300">
              <a href="#about" className="hover:text-zinc-900 dark:hover:text-white">About</a>
              <a href="#work" className="hover:text-zinc-900 dark:hover:text-white">Work</a>
              <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white">Contact</a>
              <a href="#journal" className="hover:text-zinc-900 dark:hover:text-white">Journal</a>
            </nav>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
                aria-label="Toggle theme"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-3 py-2 text-xs font-medium text-zinc-800 backdrop-blur-md hover:bg-white/90 dark:border-white/10 dark:bg-zinc-800/70 dark:text-zinc-100"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'} mode</span>
              </button>
              <button onClick={scrollToWork} className="hidden rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-teal-400 px-4 py-2 text-xs font-semibold text-white shadow md:inline-flex">
                View Work <ArrowRight size={14} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Hero onViewWork={scrollToWork} onConnect={scrollToContact} />
        <About />
        <Projects />
        {/* Skills & Tools inline section */}
        <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-3xl border border-white/40 bg-white/60 p-6 backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/60">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold">Skills & Tools</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Product design, design systems, prototyping, motion, accessibility.</p>
              </div>
              <div className="grid grid-cols-5 gap-3 sm:gap-4">
                {[0,1,2,3,4].map((i) => (
                  <div key={i} className="group relative h-12 w-12 overflow-hidden rounded-2xl border border-white/40 bg-white/70 p-2 backdrop-blur-sm transition hover:shadow-lg dark:border-white/10 dark:bg-zinc-800/70">
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-violet-500/10 via-fuchsia-500/10 to-teal-400/10 opacity-0 transition group-hover:opacity-100" />
                    <span className="sr-only">Tool</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Contact />
      </main>
    </div>
  );
}
