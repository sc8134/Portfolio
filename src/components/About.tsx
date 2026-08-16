import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Target, Users, Coffee } from 'lucide-react';

const strengths = [
  {
    icon: Zap,
    title: 'Performance-First',
    description: 'I obsess over Core Web Vitals, bundle sizes, and query efficiency.',
  },
  {
    icon: Target,
    title: 'Product-Minded',
    description: 'I think beyond code - shipping features that actually solve user problems.',
  },
  {
    icon: Users,
    title: 'Team Collaborator',
    description: 'Comfortable leading projects or contributing as an individual contributor.',
  },
  {
    icon: Coffee,
    title: 'Lifelong Learner',
    description: 'Always exploring emerging tech - currently deep in distributed systems and AI.',
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 bg-[#EDE6DF]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest text-[#E8654A] uppercase">
            Who Am I
          </span>
          <h2
            id="about-heading"
            className="mt-2 text-3xl sm:text-4xl font-bold text-[#1E3A5F]"
          >
            Turning{' '}
            <span
              className="text-[#E8654A] italic"
              style={{ fontFamily: '"DM Serif Display", ui-serif, Georgia, serif' }}
            >
              complexity
            </span>{' '}
            into clarity
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-3 rounded-2xl bg-[#E8654A]/20 blur-xl" aria-hidden="true" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl border-2 border-[#E8654A]/30 overflow-hidden shadow-xl">
                <picture>
                  <source srcSet="/formal.webp" type="image/webp" />
                  <img
                    src="/formal.jpg"
                    alt="Sagar RC — Full Stack Developer"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    width="288"
                    height="288"
                    decoding="async"
                    sizes="(max-width: 640px) 256px, 288px"
                  />
                </picture>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white border border-[#D9CFC5] rounded-xl px-4 py-2 shadow-lg">
                <p className="text-sm font-bold text-[#1E3A5F]">2+ Years</p>
                <p className="text-xs text-[#4A6080]">Building</p>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-[#2B4D7A] leading-relaxed">
              <p className="text-lg text-[#1E3A5F]">
                I got into development through Python — not through a bootcamp or a tutorial,
                but by trying to automate things that annoyed me. That habit of building
                solutions to real problems is still what drives me.
              </p>
              <p>
                Over the past 2+ years of building personal projects alongside my Computer
                Engineering degree, I've grown from frontend work to full-stack development.
                The project I'm most proud of is{' '}
                <strong className="text-[#1E3A5F]">Namo Patro</strong> — a Nepali digital calendar
                I built because nothing decent existed for the BS/AD conversion and local festival
                data my community actually needed.
              </p>
              <p>
                My core stack is{' '}
                <strong className="text-[#1E3A5F]">React, TypeScript, Python, Flask, Node.js</strong>{' '}
                and <strong className="text-[#1E3A5F]">PostgreSQL</strong>. I pick tools based on
                the problem, not habit. BCE in Computer Engineering from Cosmos College,
                Pokhara University — courses completed, building the whole time.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                { value: '6+', label: 'Projects Built' },
                { value: '2+', label: 'Years Building' },
                { value: '3', label: 'Open Source' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center p-3 rounded-xl bg-white border border-[#D9CFC5] shadow-sm">
                  <p className="text-2xl font-bold text-[#E8654A]">{value}</p>
                  <p className="text-xs text-[#4A6080] mt-1">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Strengths grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {strengths.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="group p-5 rounded-xl bg-white border border-[#D9CFC5] shadow-sm hover:shadow-md hover:border-[#E8654A]/50 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-[#E8654A]/10 flex items-center justify-center mb-3 group-hover:bg-[#E8654A]/20 transition-colors">
                <item.icon size={18} className="text-[#E8654A]" />
              </div>
              <h3 className="text-sm font-semibold text-[#1E3A5F] mb-1">{item.title}</h3>
              <p className="text-xs text-[#4A6080] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
