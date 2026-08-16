import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'CodeRunners Technologies / Freelance',
    period: 'Jan 2025 – Present',
    description:
      'Building complete products end-to-end — React frontends, Python/Node.js backends, and deployment. Current focus: AI-powered tools and SaaS products. Built Nova DVR (live on Vercel) and Signal Job Portal during this period.',
    type: 'work',
  },
  {
    id: 2,
    role: 'Backend Web Developer',
    company: 'Freelance',
    period: 'Jan 2024 – Dec 2024',
    description:
      'Moved from frontend-only to full backend work. Built REST APIs with Flask and Node.js, integrated PostgreSQL and MongoDB, and set up GitHub Actions CI/CD pipelines for client projects. This is when I started taking system design seriously.',
    type: 'work',
  },
  {
    id: 3,
    role: 'Frontend Web Developer',
    company: 'Freelance',
    period: 'Jun 2022 – Dec 2023',
    description:
      'Started freelancing with React and Tailwind CSS — mostly client sites for local businesses in Nepal. Learned a lot about responsive design, accessibility, and what real users actually need from an interface.',
    type: 'work',
  },
  {
    id: 4,
    role: 'B.C.E. Computer Engineering',
    university: 'Pokhara University',
    college: 'Cosmos College of Management & Technology',
    period: '2022 – 2026',
    description:
      'Studying software engineering, algorithms, networking, and distributed systems. I\'ve been building real projects in parallel the entire time — the GitHub profile reflects that. Namo Patro was started during my first year.',
    type: 'education',
  },
  {
    id: 5,
    role: '+2 in Science (Physics)',
    college: 'Milestone International College',
    period: '2019 – 2021',
    description:
      'Completed higher secondary with honors — 3.78 GPA, top 10% in Nepal. Physics trained me to think systematically before acting, which still shows up in how I approach debugging.',
    type: 'education',
  },
];
