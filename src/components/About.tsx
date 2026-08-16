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
                <img
                  src="/formal.jpg"
                  alt="Sagar RC — Full Stack Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white border border-[#D9CFC5] rounded-xl px-4 py-2 shadow-lg">
                <p className="text-sm font-bold text-[#1E3A5F]">3+ Years</p>
                <p className="text-xs text-[#4A6080]">Experience</p>
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
                I'm a Full Stack Developer with 3+ years of experience building
                web applications across the full stack. I started with frontend work in 2022,
                expanded into backend development, and now build complete products
                from pixel-perfect interfaces to resilient API systems.
              </p>
              <p>
                My core stack is{' '}
                <strong className="text-[#1E3A5F]">React, TypeScript, Angular, Next.js, Python, Flask, Node.js</strong>{' '}
                and{' '}
                <strong className="text-[#1E3A5F]">PostgreSQL</strong>, though I pick the right tool for the right job.
                I've shipped products in SaaS, e-commerce, fintech, and AI-always
                with a focus on clean code, developer experience, and user impact.
              </p>
              <p>
                When I'm not coding, I'm writing about software architecture on my blog,
                contributing to open source, or exploring mountain trails with my camera.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                { value: '6+', label: 'Projects Shipped' },
                { value: '3+', label: 'Years Building' },
                { value: '3', label: 'Open Source Libs' },
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
