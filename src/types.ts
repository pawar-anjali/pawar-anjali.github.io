export type Config = {
  name: string;
  title: string;
  description: string;
  accentColor: string;
  tagline: string;
  heroQuote: string;
  stats: { value: string; label: string }[];
  social: {
    email: string;
    linkedin: string;
    github: string;
    twitter: string;
  };
  aboutMe: string;
  skills: string[];
  projects: {
    name: string;
    description: string;
    skills: string[];
    link: string;
  }[];
  experience: {
    title: string;
    company: string;
    dateRange: string;
    bullets: string[];
  }[];
  education: {
    degree: string;
    school: string;
    dateRange: string;
    achievements: string[];
  }[];
  certifications: {
    degree: string;
    school: string;
    dateRange: string;
    achievements: string[];
  }[];
};
