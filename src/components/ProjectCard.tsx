import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
}

export default function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col bg-white rounded-2xl border border-[#D9CFC5] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
      aria-label={project.title}
    >
      {/* Card top accent bar — coral */}
      <div className="h-1.5 bg-[#E8654A]" aria-hidden="true" />

      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-lg font-bold text-[#1E3A5F] mb-2 group-hover:text-[#E8654A] transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#4A6080] leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-block px-2.5 py-1 text-xs font-medium rounded-md bg-[#F5F0EB] text-[#1E3A5F] border border-[#D9CFC5]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Key features */}
        <ul className="space-y-1.5 mb-6 flex-1" aria-label="Key features">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-xs text-[#2B4D7A]">
              <CheckCircle2 size={13} className="shrink-0 mt-0.5 text-[#E8654A]" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Action buttons */}
        <div className="flex gap-3 pt-2 border-t border-[#EDE6DF]">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#E8654A] hover:bg-[#D45538] text-white text-xs font-semibold transition-colors shadow-sm shadow-[#E8654A]/20"
            aria-label={`View live demo of ${project.title}`}
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg border border-[#1E3A5F] text-[#1E3A5F] text-xs font-semibold hover:bg-[#1E3A5F] hover:text-white transition-colors"
            aria-label={`View GitHub source for ${project.title}`}
          >
            <GithubIcon size={13} />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}
