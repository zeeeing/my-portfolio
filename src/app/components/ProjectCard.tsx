"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, Chip, Button } from "@heroui/react";
import { motion, useInView } from "motion/react";
import { GitHubIcon, GlobeIcon } from "../ui/icons";
import type { Project, ProjectStatus } from "../types";

interface ProjectCardProps {
  project: Project;
}

const statusConfig: Record<
  ProjectStatus,
  { label: string; color: "success" | "default" | "warning" }
> = {
  live: { label: "Live", color: "success" },
  archived: { label: "Archived", color: "default" },
  wip: { label: "In Progress", color: "warning" },
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const status = statusConfig[project.status];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView && { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: project.id * 0.05 }}
      className="h-full"
    >
      <Card className="h-full w-full bg-[#7373731f]" shadow="sm">
        <CardBody className="gap-4 p-4">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-default-100">
            <Image
              alt={`${project.title} preview`}
              className="object-cover"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              src={project.image}
            />
          </div>

          <div className="flex flex-1 flex-col gap-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold md:text-xl">
                  {project.title}
                </h2>
                <p className="text-sm text-default-500">{project.year}</p>
              </div>
              <Chip color={status.color} size="sm" variant="flat">
                {status.label}
              </Chip>
            </div>

            <p className="text-sm leading-6 text-default-600">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <Chip key={tool} color="secondary" size="sm" variant="flat">
                  {tool}
                </Chip>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-2 pt-1">
              {project.liveLink && (
                <Button
                  as={Link}
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="flat"
                  color="primary"
                  size="sm"
                  startContent={<GlobeIcon />}
                >
                  Website
                </Button>
              )}
              {project.githubLink && (
                <Button
                  as={Link}
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="flat"
                  color="primary"
                  size="sm"
                  startContent={<GitHubIcon />}
                >
                  Source
                </Button>
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};
