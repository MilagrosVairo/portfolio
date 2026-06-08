import { 
  Code2, Server, Database, Globe, Box, GitBranch, Layers, Trello, Figma, 
  Cloud, FileJson, Coffee, Hash, FileType2, Send, Palette, BarChart3, Languages 
} from 'lucide-react';
import { Skill, SkillCategory } from './types';

export const SKILLS: Skill[] = [
  // Product & Data Analytics
  { name: "Power BI", category: SkillCategory.PRODUCT_DATA, icon: BarChart3, featured: true },
  { name: "Python", category: SkillCategory.PRODUCT_DATA, icon: FileJson, featured: true },
  { name: "Tableau", category: SkillCategory.PRODUCT_DATA, icon: BarChart3 },
  { name: "Pandas", category: SkillCategory.PRODUCT_DATA, icon: FileJson },
  { name: "Power Query", category: SkillCategory.PRODUCT_DATA, icon: BarChart3 },
  { name: "DAX", category: SkillCategory.PRODUCT_DATA, icon: BarChart3 },
  { name: "Excel", category: SkillCategory.PRODUCT_DATA, icon: FileJson },

  // Backend
  { name: "Java", category: SkillCategory.BACKEND, icon: Coffee, featured: true },
  { name: "Spring Boot", category: SkillCategory.BACKEND, icon: Server, featured: true },
  { name: ".NET / C#", category: SkillCategory.BACKEND, icon: Hash, featured: true },
  { name: "PHP (Laravel)", category: SkillCategory.BACKEND, icon: Code2 },
  { name: "Node.js", category: SkillCategory.BACKEND, icon: FileJson },
  { name: "GeneXus", category: SkillCategory.BACKEND, icon: Layers },

  // Frontend & Design
  { name: "React", category: SkillCategory.FRONTEND, icon: Code2, featured: true },
  { name: "TypeScript", category: SkillCategory.FRONTEND, icon: FileType2, featured: true },
  { name: "Next.js", category: SkillCategory.FRONTEND, icon: Globe },
  { name: "JavaScript", category: SkillCategory.FRONTEND, icon: FileJson },
  { name: "Vue.js", category: SkillCategory.FRONTEND, icon: Code2 },
  { name: "TailwindCSS", category: SkillCategory.FRONTEND, icon: Box },
  { name: "Figma", category: SkillCategory.FRONTEND, icon: Figma },
  { name: "Adobe XD", category: SkillCategory.FRONTEND, icon: Palette },

 // Databases
  { name: "PostgreSQL", category: SkillCategory.DATABASE, icon: Database, featured: true },
  { name: "MySQL", category: SkillCategory.DATABASE, icon: Database, featured: true },
  { name: "SQL", category: SkillCategory.DATABASE, icon: Database },
  { name: "Hibernate", category: SkillCategory.DATABASE, icon: Layers },

  // Cloud & DevOps 
  { name: "AWS", category: SkillCategory.DEVOPS, icon: Cloud, featured: true },
  { name: "Docker", category: SkillCategory.DEVOPS, icon: Box },
  { name: "Git / GitHub", category: SkillCategory.DEVOPS, icon: GitBranch },
  { name: "Postman", category: SkillCategory.DEVOPS, icon: Send },
  { name: "Jira", category: SkillCategory.DEVOPS, icon: Trello },
];