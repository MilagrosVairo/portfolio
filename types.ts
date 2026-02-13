import { LucideIcon } from "lucide-react";

export enum SkillCategory {
  BACKEND = "Backend",
  FRONTEND = "Frontend & Design",
  DATABASE = "Databases",
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