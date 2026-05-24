"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Chip } from "@heroui/react";
import { ArrowLeft } from "lucide-react";
import { projectStatusConfig } from "../../data/projectStatus";
import type { Project } from "../../types";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  const status = projectStatusConfig[project.status];

  return (
    <main className="flex w-full flex-col gap-8 px-6 py-32 md:py-36">
      <Button
        as={Link}
        href="/projects"
        variant="light"
        size="sm"
        className="w-fit"
        startContent={<ArrowLeft size={16} />}
      >
        Projects
      </Button>

      <section className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-default-100 shadow-sm">
          <Image
            alt={`${project.title} preview`}
            className="object-cover"
            fill
            priority
            sizes="(min-width: 768px) 55vw, 100vw"
            src={project.image}
          />
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-2">
            <Chip color={status.color} variant="flat">
              {status.label}
            </Chip>
            <Chip color="secondary" variant="flat">
              {project.year}
            </Chip>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-semibold leading-none text-primary md:text-6xl">
              {project.title}
            </h1>
            <p className="text-lg leading-8">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Chip key={tool} color="secondary" size="sm" variant="flat">
                {tool}
              </Chip>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {project.liveLink && (
              <Button
                as={Link}
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                variant="flat"
              >
                View Website
              </Button>
            )}
            {project.githubLink && (
              <Button
                as={Link}
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                color="secondary"
                variant="flat"
              >
                View Source
              </Button>
            )}
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-[#7373731f] p-5">
          <h2 className="text-xl font-semibold text-secondary">Problem</h2>
          <p className="mt-3 text-sm leading-7">{project.caseStudy.problem}</p>
        </div>

        <div className="rounded-2xl bg-[#7373731f] p-5">
          <h2 className="text-xl font-semibold text-secondary">Solution</h2>
          <p className="mt-3 text-sm leading-7">{project.caseStudy.solution}</p>
        </div>
      </section>
    </main>
  );
}
