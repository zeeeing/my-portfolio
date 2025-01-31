"use client";

import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../ui/constants";

export default function Projects() {
  return (
    <div className="py-36 flex flex-col w-full gap-12">
      <h1 className="text-5xl font-serif font-bold text-left">My Projects</h1>
      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
