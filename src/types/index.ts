export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  image?: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Experience {
  id: number;
  role: string;
  company?: string;
  university?: string;
  college?: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

export interface NavLink {
  label: string;
  href: string;
}
