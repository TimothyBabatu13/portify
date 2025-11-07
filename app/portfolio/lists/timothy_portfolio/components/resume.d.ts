import { LucideIcon } from "lucide-react";

export interface Project {
  title: string;
  href: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: { type: string; href: string; icon: LucideIcon }[];
  image: string;
  video: string;
}

export interface Education {
  school: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
}

export interface Contact {
  email: string;
  social: Record<
    string,
    {
      name: string;
      url: string;
      icon: LucideIcon;
      navbar: boolean;
    }
  >;
}

export interface ResumeData {
  name: string;
  initials: string;
  url: string;
  location: string;
  description: string;
  summary: string;
  avatarUrl: string;
  skills: string[];
  navbar: { href: string; icon: LucideIcon; label: string }[];
  contact: Contact;
  education: Education[];
  projects: Project[];
}
