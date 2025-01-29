"use client";

import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../constants/constants";

export default function Projects() {
  return (
    <div className="py-36 px-20 flex flex-col w-full font-serif gap-12">
      <h1 className="text-5xl font-bold text-gray-800 text-left">
        My Projects
      </h1>
      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
