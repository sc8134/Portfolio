import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'CodeRunners Technologies',
    period: 'Jul 2025 – Present',
    description:
      'Working on a production-level MERN stack platform (MongoDB, Express, React, Node.js). Built the majority of the React frontend, implemented SMTP-based email integration, and developed an admin control panel for event management. Currently in deployment. Equity-based arrangement.',
    type: 'work',
  },
  {
    id: 2,
    role: 'Web Developer',
    company: 'Personal Projects',
    period: '2024 – 2025',
    description:
      'Started building web applications to apply what I was learning in my Computer Engineering degree. Covered frontend (React, Tailwind CSS) and backend (Flask, Node.js, PostgreSQL). This is when I built Namo Patro and Velora.',
    type: 'work',
  },
  {
    id: 3,
    role: 'B.C.E. Computer Engineering',
    university: 'Pokhara University',
    college: 'Cosmos College of Management & Technology',
    period: '2022 – 2026',
    description:
      'Completed coursework in software engineering, algorithms, networking, data structures, and distributed systems. Courses completed — awaiting graduation. Built real projects throughout the degree, all publicly available on GitHub.',
    type: 'education',
  },
  {
    id: 4,
    role: '+2 in Science (Physics)',
    college: 'Milestone International College',
    period: '2019 – 2021',
    description:
      'Completed higher secondary with honors — 3.78 GPA, ranked in the top 10% in Nepal.',
    type: 'education',
  },
];