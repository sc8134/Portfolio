import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Nova DVR',
    description:
      'I built Nova DVR because downloading and organizing media across platforms was fragmented and slow. The goal: one tool that handles everything — download, tag, convert, sync. Built with a React frontend and a Python/Flask backend, with AI-powered metadata tagging to auto-categorize content. Now live on Vercel.',
    techStack: ['TypeScript', 'React', 'Python', 'Flask', 'Tailwind CSS', 'Vercel'],
    features: [
      'AI-powered metadata tagging and smart recommendations',
      'Multi-platform video download with batch scheduling',
      'Cloud sync and format conversion pipeline',
      'React frontend with dedicated Python/Flask backend',
    ],
    liveUrl: 'https://nova-dvr.vercel.app',
    githubUrl: 'https://github.com/sc8134/Nova_DVR',
  },
  {
    id: 2,
    title: 'Signal — Job Portal',
    description:
      'A full-stack job portal connecting employers and job seekers through a clean, intentional interface. Built with dual-role authentication — separate flows for employers posting jobs and seekers applying — with a smart filtering system that actually surfaces relevant matches.',
    techStack: ['TypeScript', 'React', 'Node.js', 'Tailwind CSS', 'REST API'],
    features: [
      'Dual-role authentication for employers and job seekers',
      'Smart job matching and filtering system',
      'Clean, intentional UI designed for usability',
      'Full-stack TypeScript architecture',
    ],
    liveUrl: 'https://github.com/sc8134/signal-job-portal',
    githubUrl: 'https://github.com/sc8134/signal-job-portal',
  },
  {
    id: 3,
    title: 'AI Reel Generator',
    description:
      'An end-to-end Python pipeline that transforms text prompts into short-form video reels — auto-generating captions, background music, and applying customizable templates. Built for content creators who want to produce reels without manual video editing.',
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
    title: 'Velora — Media Hub',
    description:
      'A next-generation media hub combining video downloading, AI content recognition, and smart discovery into one accessible platform. Free to use, built with TypeScript and deployed on Vercel.',
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
      'A security awareness training platform that lets organizations run controlled phishing simulations to measure employee vulnerability. Built with React + Tailwind on the frontend and Python/Flask on the backend, with a campaign analytics dashboard.',
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'Flask', 'Python'],
    features: [
      'Realistic phishing email and landing page simulations',
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
      'I built Namo Patro because nothing decent existed for Nepali users who needed reliable BS/AD calendar conversion alongside local festival listings, astrology, and radio. It\'s GPL-3.0 open source — built for the community, by someone from it.',
    techStack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      'Bikram Sambat (BS) to AD calendar conversion',
      'Nepali festival listings, astrology, and horoscope',
      'Finance tools and live radio integration',
      'GPL-3.0 open source — community owned',
    ],
    liveUrl: 'https://github.com/sc8134/Namo-Patro',
    githubUrl: 'https://github.com/sc8134/Namo-Patro',
  },
];
