import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { Monitor, Server, Database, Wrench } from 'lucide-react';

const categoryIcons: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Frontend: Monitor,
  Backend: Server,
  Database: Database,
  'Tools & DevOps': Wrench,
};

// All categories share the brand palette — coral icon, navy title
const categoryBg: Record<string, string> = {
  Frontend:       'bg-white border-[#D9CFC5]',
  Backend:        'bg-white border-[#D9CFC5]',
  Database:       'bg-white border-[#D9CFC5]',
  'Tools & DevOps': 'bg-white border-[#D9CFC5]',
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 bg-[#F5F0EB]"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest text-[#E8654A] uppercase">
            Skills
          </span>
          <h2
            id="skills-heading"
            className="mt-2 text-3xl sm:text-4xl font-bold text-[#1E3A5F]"
          >
            My{' '}
            <span
              className="text-[#E8654A] italic"
              style={{ fontFamily: '"DM Serif Display", ui-serif, Georgia, serif' }}
            >
              tech stack
            </span>
          </h2>
          <p className="mt-3 text-[#4A6080] max-w-xl mx-auto">
            Tools and technologies I use to build production-grade applications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((cat, catIdx) => {
            const Icon = categoryIcons[cat.category] ?? Monitor;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className={`p-6 rounded-2xl border ${categoryBg[cat.category]} shadow-sm hover:shadow-md hover:border-[#E8654A]/40 transition-all`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-[#E8654A] flex items-center justify-center shadow">
                    <Icon size={16} className="text-white" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1E3A5F]">
                    {cat.category}
                  </h3>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2" role="list" aria-label={`${cat.category} skills`}>
                  {cat.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skill.name}
                      role="listitem"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: catIdx * 0.1 + skillIdx * 0.04 }}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold border bg-[#F5F0EB] text-[#1E3A5F] border-[#D9CFC5] hover:border-[#E8654A]/60 hover:text-[#E8654A] transition-all hover:scale-105 cursor-default select-none"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
