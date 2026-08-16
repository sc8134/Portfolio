import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Nova DVR',
    description:
      'A next-gen digital video recorder and downloader built for speed, simplicity, and intelligence. Supports multi-platform downloads, batch scheduling, cloud sync, and format conversion.',
    techStack: ['TypeScript', 'React', 'Python', 'Flask', 'Tailwind CSS', 'Vercel'],
    features: [
      'AI-powered metadata tagging and smart recommendations',
      'Multi-platform video download with batch scheduling',
      'Cloud sync and format conversion pipeline',
      'Sleek modern UI with a dedicated Python backend',
    ],
    liveUrl: 'https://nova-dvr.vercel.app',
    githubUrl: 'https://github.com/sc8134/Nova_DVR',
  },
  {
    id: 2,
    title: 'Signal-Job Portal',
    description:
      'A full-stack job portal platform connecting employers and job seekers through a clean, intentional interface with smart features built in from the ground up.',
    techStack: ['TypeScript', 'React', 'Node.js', 'Tailwind CSS', 'REST API'],
    features: [
      'Dual-role auth for employers and job seekers',
      'Smart job matching and filtering system',
      'Clean, intentional UI focused on usability',
      'Full-stack architecture with a TypeScript codebase',
    ],
    liveUrl: 'https://github.com/sc8134/signal-job-portal',
    githubUrl: 'https://github.com/sc8134/signal-job-portal',
  },
  {
    id: 3,
    title: 'AI Reel Generator',
    description:
      'An end-to-end AI tool that transforms simple text prompts into dynamic short-form video reels with auto-generated captions, background music, and customizable templates.',
    techStack: ['Python', 'AI/ML', 'FFmpeg', 'OpenAI API', 'REST API'],
    features: [
      'Text-to-video reel generation via AI pipeline',
      'Auto-generated captions and background music',
      'Customizable video templates and styles',
      'End-to-end media processing with FFmpeg',
    ],
    liveUrl: 'https://github.com/sc8134/ai-reel-generator',
    githubUrl: 'https://github.com/sc8134/ai-reel-generator',
  },
  {
    id: 4,
    title: 'Velora-Media Hub',
    description:
      'A next-generation media hub combining powerful downloading, AI tools, and smart content recognition into one seamless platform. Free to use and built for accessibility.',
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'AI APIs', 'Vercel'],
    features: [
      'Intelligent video extraction and content discovery',
      'AI-powered smart recognition features',
      'Accessible, responsive design for all devices',
      'Live deployment on Vercel',
    ],
    liveUrl: 'https://velora-six-gules.vercel.app',
    githubUrl: 'https://github.com/sc8134/Velora',
  },
  {
    id: 5,
    title: 'Phishing Simulation Tool',
    description:
      'A full-stack security awareness training tool that simulates phishing attacks to help organizations train employees and measure their vulnerability to social engineering.',
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'Flask', 'Python'],
    features: [
      'Realistic phishing email and page simulations',
      'Campaign tracking and click-through analytics',
      'User awareness reporting dashboard',
      'React + Tailwind frontend with Flask backend',
    ],
    liveUrl: 'https://github.com/sc8134/phishing-simulation-tool',
    githubUrl: 'https://github.com/sc8134/phishing-simulation-tool',
  },
  {
    id: 6,
    title: 'Namo Patro',
    description:
      'A Nepali digital calendar and lifestyle platform covering Bikram Sambat (BS) calendar, astrology, finance tools, and radio — a full-stack app tailored for Nepal.',
    techStack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      'Bikram Sambat (BS) to AD calendar conversion',
      'Astrology, horoscope, and festival listings',
      'Finance tools and live radio integration',
      'GPL-3.0 open-source, built for the Nepali community',
    ],
    liveUrl: 'https://github.com/sc8134/Namo-Patro',
    githubUrl: 'https://github.com/sc8134/Namo-Patro',
  },
];
