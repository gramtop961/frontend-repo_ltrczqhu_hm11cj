import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Globe } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-zinc-900 md:text-4xl dark:text-zinc-50">Let’s collaborate</h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-300">Have a project in mind or just want to say hi? I’m open to freelance, contracts, and full-time roles.</p>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-10 max-w-3xl rounded-3xl border border-white/40 bg-white/60 p-6 backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/60"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm text-zinc-600 dark:text-zinc-300">Name</label>
            <input required className="mt-1 w-full rounded-xl border border-zinc-200 bg-white/70 px-4 py-3 text-zinc-800 outline-none ring-0 backdrop-blur-sm focus:border-violet-400 dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-100" />
          </div>
          <div>
            <label className="text-sm text-zinc-600 dark:text-zinc-300">Email</label>
            <input type="email" required className="mt-1 w-full rounded-xl border border-zinc-200 bg-white/70 px-4 py-3 text-zinc-800 outline-none ring-0 backdrop-blur-sm focus:border-violet-400 dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-100" />
          </div>
        </div>
        <div className="mt-4">
          <label className="text-sm text-zinc-600 dark:text-zinc-300">Message</label>
          <textarea rows={5} required className="mt-1 w-full rounded-xl border border-zinc-200 bg-white/70 px-4 py-3 text-zinc-800 outline-none ring-0 backdrop-blur-sm focus:border-violet-400 dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-100" />
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-3 text-zinc-600 dark:text-zinc-300">
            <a href="mailto:hello@jayant.design" className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-sm backdrop-blur-md hover:bg-white/90 dark:bg-zinc-800/70 dark:hover:bg-zinc-800"><Mail size={16} /> Email</a>
            <a href="https://linkedin.com" target="_blank" className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-sm backdrop-blur-md hover:bg-white/90 dark:bg-zinc-800/70 dark:hover:bg-zinc-800" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
            <a href="https://github.com" target="_blank" className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-sm backdrop-blur-md hover:bg-white/90 dark:bg-zinc-800/70 dark:hover:bg-zinc-800" rel="noreferrer"><Github size={16} /> GitHub</a>
            <a href="https://dribbble.com" target="_blank" className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-sm backdrop-blur-md hover:bg-white/90 dark:bg-zinc-800/70 dark:hover:bg-zinc-800" rel="noreferrer"><Globe size={16} /> Dribbble</a>
          </div>
          <button type="submit" className="rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-teal-400 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110">Send Message</button>
        </div>
        {sent && (
          <p className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">Thanks! Your message has been noted. I’ll reply soon.</p>
        )}
      </motion.form>

      <div className="mt-16 text-center text-sm text-zinc-500 dark:text-zinc-400">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/60 px-4 py-2 backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/60">Designed & Built by Jayant <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-gradient-to-r from-violet-500 to-teal-400" /></span>
      </div>
    </section>
  );
}
