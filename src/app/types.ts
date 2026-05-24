export type Contact = {
  type: string;
  link: string;
};

export type ProjectStatus = "live" | "archived" | "wip";

export type ProjectCaseStudy = {
  problem: string;
  solution: string;
};

export type Project = {
  id: number;
  slug: string;
  image: string;
  title: string;
  description: string;
  year: string;
  liveLink?: string;
  githubLink?: string;
  tools: string[];
  featured: boolean;
  status: ProjectStatus;
  caseStudy: ProjectCaseStudy;
};
