import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

const featuredProjects = projects.filter((project) => project.featured);
const otherProjects = projects.filter((project) => !project.featured);
const liveProjects = projects.filter((project) => project.status === "live");
const archivedProjects = projects.filter(
  (project) => project.status === "archived"
);
const technologies = new Set(projects.flatMap((project) => project.tools));

const projectStats = [
  { label: "Projects", value: projects.length },
  { label: "Live", value: liveProjects.length },
  { label: "Archived", value: archivedProjects.length },
  { label: "Technologies", value: technologies.size },
];

export default function Projects() {
  return (
    <main className="flex w-full flex-col gap-12 px-6 py-32 md:gap-14 md:py-36">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold md:text-5xl">Projects</h1>
        <dl className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-default-500">
          {projectStats.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-1.5">
              <dt>{stat.label}</dt>
              <dd className="font-bold text-foreground">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <section className="flex flex-col gap-5">
        <h2 className="text-xl font-semibold md:text-3xl">Featured</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {otherProjects.length > 0 && (
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-semibold md:text-3xl">Other Projects</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
