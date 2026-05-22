export type Contact = {
  type: string;
  link: string;
};

export type ProjectStatus = "live" | "archived" | "wip";

export type Project = {
  id: number;
  image: string;
  title: string;
  description: string;
  year: string;
  liveLink?: string;
  githubLink?: string;
  tools: string[];
  featured: boolean;
  status: ProjectStatus;
};
