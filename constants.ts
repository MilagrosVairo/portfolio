import { 
  Code2, 
  Server, 
  Database, 
  Layout, 
  Globe, 
  Box, 
  GitBranch, 
  Layers, 
  MessageSquare,
  Trello,
  Figma,
  Cloud,
  FileJson,
  Coffee,
  Hash,
  FileType2,
  Send,
  PenTool,
  Palette
} from 'lucide-react';
import { Skill, SkillCategory } from './types';

export const SKILLS: Skill[] = [
  // Backend
  { name: "Java", category: SkillCategory.BACKEND, icon: Coffee, featured: true },
  { name: "Spring Boot", category: SkillCategory.BACKEND, icon: Server, featured: true },
  { name: ".NET / C#", category: SkillCategory.BACKEND, icon: Hash, featured: true },
  { name: "GeneXus", category: SkillCategory.BACKEND, icon: Layers },
  { name: "Node.js", category: SkillCategory.BACKEND, icon: FileJson },
  { name: "PHP (Laravel)", category: SkillCategory.BACKEND, icon: Code2 },

  // Frontend & Design
  { name: "JavaScript", category: SkillCategory.FRONTEND, icon: FileJson },
  { name: "TypeScript", category: SkillCategory.FRONTEND, icon: FileType2, featured: true },
  { name: "React", category: SkillCategory.FRONTEND, icon: Code2, featured: true },
  { name: "Next.js", category: SkillCategory.FRONTEND, icon: Globe },
  { name: "TailwindCSS", category: SkillCategory.FRONTEND, icon: Box },
  { name: "Figma", category: SkillCategory.FRONTEND, icon: Figma },
  { name: "Adobe XD", category: SkillCategory.FRONTEND, icon: Palette },

  // Databases
  { name: "PostgreSQL", category: SkillCategory.DATABASE, icon: Database, featured: true },
  { name: "SQL", category: SkillCategory.DATABASE, icon: Database },
  { name: "Hibernate", category: SkillCategory.DATABASE, icon: Layers },

  // Cloud & DevOps
  { name: "AWS", category: SkillCategory.DEVOPS, icon: Cloud, featured: true },
  { name: "Docker", category: SkillCategory.DEVOPS, icon: Box },
  { name: "Git / GitHub", category: SkillCategory.DEVOPS, icon: GitBranch },
  { name: "Postman", category: SkillCategory.DEVOPS, icon: Send },
  { name: "Jira", category: SkillCategory.DEVOPS, icon: Trello },
];