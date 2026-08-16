import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from './SocialIcons';
import { useEffect, useState } from 'react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const roles = [
  'Full Stack Developer',
  'Python Enthusiast',
  'React + Angular Engineer',
  'Open Source Builder',
];

// Smooth role rotator — no typing, just clean fade+slide
function useRoleRotator(items: string[], interval = 2800) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval]);
  return index;
}

export default function Hero() {
  const roleIndex = useRoleRotator(roles);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F5F0EB]"
      aria-label="Hero"
    >
      {/* Gradient blobs */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#E8654A]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-[#1E3A5F]/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">

        {/* Available badge */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          transition={{ duration: 0.6, delay: 0 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white text-[#1E3A5F] border border-[#D9CFC5] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
            Next Adventure Awaits
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1E3A5F] mb-6 leading-tight"
        >
          Hi, I'm{' '}
          <span
            className="text-[#E8654A] italic"
            style={{ fontFamily: '"DM Serif Display", ui-serif, Georgia, serif' }}
          >
            Sagar Roka Chhetri
          </span>
        </motion.h1>

        {/* Smooth role rotator */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-10 flex items-center justify-center mb-6 overflow-hidden"
          aria-live="polite"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="text-xl sm:text-2xl font-semibold text-[#2B4D7A]"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-[#4A6080] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I started with Python — writing scripts to automate things that bored me.
          That curiosity grew into building Nova DVR, Signal Job Portal, and Namo Patro —
          a Nepali calendar I built because nothing good existed for my community.
          All personal projects. All public on GitHub. All built to solve real problems.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#E8654A] hover:bg-[#D45538] text-white font-semibold text-sm shadow-lg shadow-[#E8654A]/25 hover:shadow-[#E8654A]/40 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            View Projects
            <ArrowRight size={16} />
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border-2 border-[#1E3A5F] text-[#1E3A5F] font-semibold text-sm hover:bg-[#1E3A5F] hover:text-white transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <Mail size={16} />
            Contact Me
          </button>
          <a
            href="/resume.pdf"
            download="Sagar_RC_Resume.pdf"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border-2 border-[#E8654A] text-[#E8654A] font-semibold text-sm hover:bg-[#E8654A] hover:text-white transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download size={16} />
            Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { href: 'https://github.com/sc8134', icon: GithubIcon, label: 'GitHub profile' },
            { href: 'https://www.linkedin.com/in/sagar-rc', icon: LinkedinIcon, label: 'LinkedIn profile' },
            { href: 'https://x.com/Sagarch05339168', icon: TwitterXIcon, label: 'Twitter profile' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 rounded-lg text-[#4A6080] hover:text-[#E8654A] hover:bg-[#EDE6DF] transition-all"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        aria-hidden="true"
      >
        <span className="text-xs text-[#7A9AB5]">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#7A9AB5] to-transparent" />
      </motion.div>
    </section>
  );
}
