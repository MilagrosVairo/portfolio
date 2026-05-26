import { LucideIcon } from "lucide-react";

export enum SkillCategory {
  // eslint-disable-next-line no-unused-vars
  BACKEND = "Backend",
  // eslint-disable-next-line no-unused-vars
  FRONTEND = "Frontend & Design",
  // eslint-disable-next-line no-unused-vars
  DATABASE = "Databases",
  // eslint-disable-next-line no-unused-vars
  DEVOPS = "Cloud & DevOps"
}

export interface Skill {
  name: string;
  category: SkillCategory;
  icon: LucideIcon;
  featured?: boolean; // Highlight key skills
}

export interface NavItem {
  label: string;
  href: string;
}