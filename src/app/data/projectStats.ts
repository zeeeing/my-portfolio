import { projects } from "./projects";

const projectStats = {
  projects: projects.length,
  live: projects.filter((project) => project.status === "live").length,
  archived: projects.filter((project) => project.status === "archived").length,
  technologies: new Set(projects.flatMap((project) => project.tools)).size,
};

export const homeProjectStats = [
  { label: "Projects", value: projectStats.projects },
  { label: "Live", value: projectStats.live },
  { label: "Technologies", value: projectStats.technologies },
];

export const projectPageStats = [
  { label: "Projects", value: projectStats.projects },
  { label: "Live", value: projectStats.live },
  { label: "Archived", value: projectStats.archived },
  { label: "Technologies", value: projectStats.technologies },
];
