import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Star } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
}

// Unique gradient per project index for the visual banner
const bannerGradients = [
  'from-[#1E3A5F] via-[#2B4D7A] to-[#E8654A]',
  'from-[#E8654A] via-[#C04030] to-[#1E3A5F]',
  'from-[#2B4D7A] via-[#1E3A5F] to-[#4A7AB5]',
  'from-[#E8654A] via-[#FF8A6A] to-[#2B4D7A]',
  'from-[#1E3A5F] via-[#4A7AB5] to-[#E8654A]',
  'from-[#C04030] via-[#E8654A] to-[#1E3A5F]',
];

// Mini browser window dots
const BrowserDots = () => (
  <div className="flex items-center gap-1.5" aria-hidden="true">
    <div className="w-2 h-2 rounded-full bg-white/30" />
    <div className="w-2 h-2 rounded-full bg-white/30" />
    <div className="w-2 h-2 rounded-full bg-white/30" />
  </div>
);

export default function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  const gradient = bannerGradients[index % bannerGradients.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col bg-white rounded-2xl border border-[#D9CFC5] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
      aria-label={project.title}
    >
      {/* Visual mockup banner */}
      <div className={`relative h-28 bg-gradient-to-br ${gradient} overflow-hidden`}>
        {/* Fake browser chrome */}
        <div className="absolute top-3 left-3 right-3 h-6 bg-black/20 rounded-md flex items-center px-2.5 gap-2">
          <BrowserDots />
          <div className="flex-1 h-3 bg-white/15 rounded-sm" />
        </div>
        {/* Fake code lines in the mockup -->*/}
        <div className="absolute bottom-3 left-3 right-3 space-y-1.5">
          <div className="flex gap-1.5">
            <div className="h-2 w-12 bg-white/25 rounded-sm" />
            <div className="h-2 w-20 bg-white/15 rounded-sm" />
            <div className="h-2 w-8 bg-white/25 rounded-sm" />
          </div>
          <div className="flex gap-1.5 ml-3">
            <div className="h-2 w-16 bg-white/20 rounded-sm" />
            <div className="h-2 w-24 bg-white/10 rounded-sm" />
          </div>
          <div className="flex gap-1.5">
            <div className="h-2 w-8 bg-white/25 rounded-sm" />
            <div className="h-2 w-14 bg-white/15 rounded-sm" />
          </div>
        </div>
        {/* Index number watermark -->*/}
        <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
          <span className="text-white/60 text-xs font-bold">0{index + 1}</span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        {/* Title + star -->*/}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-bold text-[#1E3A5F] group-hover:text-[#E8654A] transition-colors leading-tight">
            {project.title}
          </h3>
          {index === 0 && (
            <span className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#E8654A]/10 text-[#E8654A] text-[10px] font-bold border border-[#E8654A]/20">
              <Star size={9} fill="currentColor" /> Featured
            </span>
          )}
        </div>

        {/* Description -->*/}
        <p className="text-xs text-[#4A6080] leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech stack -->*/}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-block px-2 py-0.5 text-[10px] font-semibold rounded-md bg-[#F5F0EB] text-[#1E3A5F] border border-[#D9CFC5]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Key features -->*/}
        <ul className="space-y-1.5 mb-5 flex-1" aria-label="Key features">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-xs text-[#2B4D7A]">
              <CheckCircle2 size={12} className="shrink-0 mt-0.5 text-[#E8654A]" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Action buttons -->*/}
        <div className="flex gap-2 pt-3 border-t border-[#EDE6DF]">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#E8654A] hover:bg-[#D45538] text-white text-xs font-semibold transition-all shadow-sm shadow-[#E8654A]/20 hover:shadow-[#E8654A]/40 hover:-translate-y-0.5"
            aria-label={`View live demo of ${project.title}`}
          >
            <ExternalLink size={12} />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border-2 border-[#1E3A5F] text-[#1E3A5F] text-xs font-semibold hover:bg-[#1E3A5F] hover:text-white transition-all hover:-translate-y-0.5"
            aria-label={`View GitHub source for ${project.title}`}
          >
            <GithubIcon size={12} />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}
