"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Card, CardBody, CardFooter, Image, Chip, Button } from "@heroui/react";
import { motion, useInView } from "motion/react";
import { GitHubIcon, GlobeIcon } from "../ui/icons";
import { isEmpty } from "lodash";

interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  year: string;
  liveLink: string;
  githubLink: string;
  tools: string[];
  comingSoon: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView && { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: project.id * 0.05 }}
    >
      <Card isFooterBlurred className="w-full bg-[#7373731f]" shadow="sm">
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <Image
                alt={project.title}
                className="object-cover z-0"
                height={275}
                shadow="md"
                src={project.image}
                width="100%"
              />
              {project.comingSoon && (
                <CardFooter className="absolute bottom-1 left-1 w-[calc(100%_-_8px)] justify-center py-2 z-5 bg-primary-300 overflow-hidden rounded-large shadow-small">
                  <p className="text-sm text-white/80">Coming Soon</p>
                </CardFooter>
              )}
            </div>
            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex flex-col justify-between items-start gap-2">
                <h2 className="text-lg md:text-3xl font-bold">
                  {project.title}
                </h2>
                <h3 className="text-base md:text-xl">{project.year}</h3>
                <p className="text-xs md:text-base text-justify">
                  {project.description}
                </p>
                <div>
                  <div className="flex flex-wrap gap-2 my-2">
                    {project.tools.map((tool, index) => (
                      <Chip key={index} color="secondary" variant="flat">
                        {tool}
                      </Chip>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {!isEmpty(project.liveLink) && (
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
                      View Website
                    </Button>
                  )}
                  {!isEmpty(project.githubLink) && (
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
                      View Source Code
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};
