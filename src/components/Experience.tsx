import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { experiences } from '../data/experience';

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 bg-[#F5F0EB]"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest text-[#E8654A] uppercase">
            Background
          </span>
          <h2
            id="experience-heading"
            className="mt-2 text-3xl sm:text-4xl font-bold text-[#1E3A5F]"
          >
            Experience &{' '}
            <span
              className="text-[#E8654A] italic"
              style={{ fontFamily: '"DM Serif Display", ui-serif, Georgia, serif' }}
            >
              Education
            </span>
          </h2>
        </motion.div>

        <ol className="relative" aria-label="Career timeline">
          {/* Timeline line — navy top to coral bottom */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#1E3A5F] via-[#1E3A5F]/40 to-[#E8654A]/60"
            aria-hidden="true"
          />

          {experiences.map((exp, i) => {
            const isWork = exp.type === 'work';
            // work = navy, education = coral — matching the heading colors
            const iconBg = isWork
              ? 'bg-[#1E3A5F] border-[#1E3A5F]'
              : 'bg-[#E8654A] border-[#E8654A]';
            const companyColor = isWork
              ? 'text-[#1E3A5F]'
              : 'text-[#E8654A]';

            return (
              <motion.li
                key={exp.id}
                initial={{ opacity: 0, x: -24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                {/* Icon */}
                <div
                  className={`relative z-10 shrink-0 w-10 h-10 rounded-xl flex items-center justify-center shadow-sm border-2 ${iconBg}`}
                  aria-hidden="true"
                >
                  {isWork ? (
                    <Briefcase size={16} className="text-white" />
                  ) : (
                    <GraduationCap size={16} className="text-white" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pt-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                    <div>
                      <h3 className="text-base font-semibold text-[#1E3A5F] leading-tight">
                        {exp.role}
                      </h3>
                      {isWork && exp.company && (
                        <p className={`text-sm font-medium ${companyColor}`}>{exp.company}</p>
                      )}
                      {!isWork && (
                        <div>
                          {exp.college && (
                            <p className="text-sm font-medium text-[#E8654A]">{exp.college}</p>
                          )}
                          {exp.university && (
                            <p className="text-xs text-[#4A6080] mt-0.5">{exp.university}</p>
                          )}
                        </div>
                      )}
                    </div>
                    <span className="inline-block shrink-0 text-xs font-medium px-3 py-1 rounded-full bg-white text-[#4A6080] border border-[#D9CFC5] whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-[#4A6080] leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
