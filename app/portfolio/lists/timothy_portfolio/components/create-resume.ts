import { Download, Github, Globe, HomeIcon, LucideIcon } from "lucide-react";
import { Icons } from "./icons";

export const linkTypeIcons: Record<string, any> = {
  Website: Globe,
  GitHub: Github,
};

// Generate initials
const getInitials = (name: string) => {
  if (!name.trim()) return "";
  const parts = name.trim().split(" ");
  const first = parts[0]?.[0] ?? "";
  const last = parts[1]?.[0] ?? "";
  return (first + last).toUpperCase();
};

// Default sections
export const userDetails = {
  name: "",
  email: "",
  summary: "",
  avatarUrl: "",
  initials: "",
  location: "",
  description: ""
};

export const portfolioDetails = {
  skills: [] as string[]
};

export const contact = {
  email: userDetails.email,
  social: {
    GitHub: {
      name: "GitHub",
      url: "",
      icon: Icons.github,
      navbar: true,
    },
    X: {
      name: "X",
      url: "",
      icon: Icons.x,
      navbar: true,
    },
  }
};

export const education = [{
  school: "",
  degree: "",
  logoUrl: "",
  start: "",
  end: "",
}];

export const staticTemplate = {
  url: "",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/resume.pdf", icon: Download, label: "Resume" },
  ],
};

export const projects = {
  list: [] as {
    title: string;
    href: string;
    active: boolean;
    description: string;
    technologies: string[];
    links: {
      type: string;
      href: string;
      icon: LucideIcon;
    }[];
    image: string;
    video: string;
  }[],
};


// ---------------- Types ----------------
export interface buildResumeDataType {
  name: string;
  email?: string;
  summary?: string;
  avatarUrl?: string;
  location?: string;
  description?: string;
  skills?: string[];
  education?: {
    school: string;
    degree: string;
    logoUrl?: string;
    start: string;
    end: string;
  }[];
  social?: {
    GitHub?: string;
    X?: string;
  };
  project?: {
    title: string;
    href: string;
    active: boolean;
    description: string;
    technologies: string[];
    links: {
      type: string;
      href: string;
    }[];
    image: string;
    video: string;
  }[],
}

export interface buildResumeDataReturnType {
  userDetails: typeof userDetails;
  portfolioDetails: typeof portfolioDetails;
  education: typeof education;
  contact: typeof contact;
  staticTemplate: typeof staticTemplate;
  projects: typeof projects;
}

// ---------------- Builder ----------------
export function buildResumeData(data: buildResumeDataType): buildResumeDataReturnType {
  const initials = getInitials(data.name);
  
  const newUserDetails = {
    ...userDetails,
    ...data,
    initials,
  };

  const newPortfolioDetails = {
    skills: data.skills ?? [],
  };

  const newEducation = (data.education ?? education).map(e => ({
    ...e,
    logoUrl: e.logoUrl ?? "", // 👈 ensures it's always a string
  }));

  const newContact = {
    email: data.email ?? "",
    social: {
      GitHub: {
        ...contact.social.GitHub,
        url: data.social?.GitHub ?? "",
      },
      X: {
        ...contact.social.X,
        url: data.social?.X ?? "",
      },
    },
  };


   const newProjects = {
  list: (data.project ?? []).map((p) => ({
    ...p,
    links: p.links.map((link) => ({
      ...link,
      icon: linkTypeIcons[link.type] ?? null,
    })),
  })),
};


  return {
    userDetails: newUserDetails,
    portfolioDetails: newPortfolioDetails,
    education: newEducation,
    contact: newContact,
    staticTemplate,
    projects: newProjects
  };
}
