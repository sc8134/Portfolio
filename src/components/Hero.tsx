import { motion } from 'framer-motion';
import { ArrowRight, Mail, Hammer } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from './SocialIcons';
import { useEffect, useState } from 'react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

// Typing animation hook
function useTypingEffect(words: string[], speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx));
        setCharIdx((c) => c - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

const roles = [
  'Full Stack Developer',
  'Python Enthusiast',
  'React Engineer',
  'Open Source Builder',
];

function FadeUp({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUpVariant}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const typedRole = useTypingEffect(roles);

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

        {/* Currently building badge */}
        <FadeUp delay={0} className="flex items-center justify-center gap-3 mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white text-[#1E3A5F] border border-[#D9CFC5] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
            Available for new opportunities
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#E8654A]/10 text-[#E8654A] border border-[#E8654A]/20">
            <Hammer size={11} className="animate-bounce" />
            Building: Signal Job Portal
          </span>
        </FadeUp>

        {/* Name */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1E3A5F] mb-4 leading-tight"
        >
          Hi, I'm{' '}
          <span
            className="text-[#E8654A] italic"
            style={{ fontFamily: '"DM Serif Display", ui-serif, Georgia, serif' }}
          >
            Sagar RC
          </span>
        </motion.h1>

        {/* Typing animated role */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl font-semibold text-[#2B4D7A] mb-5 h-8 flex items-center justify-center"
          aria-live="polite"
          aria-label={`Role: ${typedRole}`}
        >
          <span>{typedRole}</span>
          <span className="ml-0.5 inline-block w-0.5 h-6 bg-[#E8654A] animate-pulse" aria-hidden="true" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-[#4A6080] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build fast, scalable, and beautiful web applications from pixel-perfect frontends
          to resilient backend systems. Turning ideas into production-ready products is what I do.
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
            { href: 'https://twitter.com/SagarRC', icon: TwitterXIcon, label: 'Twitter profile' },
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

        {/* Quick stats row */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-[#D9CFC5]"
        >
          {[
            { value: '6+', label: 'Projects Shipped' },
            { value: '3+', label: 'Years Coding' },
            { value: '100%', label: 'Open Source' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p
                className="text-2xl font-bold text-[#E8654A] italic"
                style={{ fontFamily: '"DM Serif Display", ui-serif, Georgia, serif' }}
              >
                {value}
              </p>
              <p className="text-xs text-[#7A9AB5] mt-0.5">{label}</p>
            </div>
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
