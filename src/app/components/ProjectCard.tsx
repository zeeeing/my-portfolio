"use client";

import React, { useRef } from "react";
import { Card, CardBody, Image, Chip } from "@heroui/react";
import { motion, useInView } from "motion/react";

interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  tools: string[];
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: project.id * 0.2 }} // use id key to determine the delay of transition
    >
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50"
        shadow="sm"
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <Image
                alt={project.title}
                className="object-cover"
                height={250}
                shadow="md"
                src={project.image}
                width="100%"
              />
            </div>
            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex flex-col justify-between items-start gap-6">
                <h2 className="font-bold text-xl">{project.title}</h2>
                <p className="font-sans">{project.description}</p>
                <div>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <Chip key={index} color="secondary" variant="flat">
                        {tool}
                      </Chip>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};
