import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Tailwind CSS' },
      { name: 'Framer Motion' },
      { name: 'Angular' },
      { name: 'Vite' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'Python' },
      { name: 'FastAPI' },
      { name: 'Flask' },
      { name: 'REST APIs' },
      { name: 'WebSockets' },
      
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'Redis' },
      { name: 'MySQL' },
      { name: 'Prisma' },
      { name: 'ClickHouse' },
      { name: 'Firebase' },
      { name: 'Supabase' },
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'AWS' },
      { name: 'CI/CD' },
      { name: 'Git' },
      { name: 'GitHub Actions' },
      { name: 'Nginx' },
      { name: 'Linux' },
    ],
  },
];
