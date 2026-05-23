"use client";

import Link from "next/link";
import { Button, Chip } from "@heroui/react";
import { motion } from "motion/react";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "./ui/icons";
import { contacts } from "./data/contacts";
import { projects } from "./data/projects";

const featuredProjects = projects.filter((project) => project.featured);
const liveProjects = projects.filter((project) => project.status === "live");
const technologies = new Set(projects.flatMap((project) => project.tools));

const snapshot = [
  { label: "Projects", value: projects.length },
  { label: "Live", value: liveProjects.length },
  { label: "Technologies", value: technologies.size },
];

const focusAreas = [
  "Full-stack engineering",
  "Financial technology",
  "Product-minded systems",
];

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: "1rem" },
    animate: { opacity: 1, y: "0%" },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <motion.main
      className="flex min-h-screen w-full flex-col gap-14 px-6 pb-16 pt-36 md:gap-16 md:pb-20 md:pt-44"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <section className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-end">
        <div className="flex flex-col gap-6">
          <motion.p
            className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary"
            variants={fadeInUp}
          >
            Software Developer
          </motion.p>

          <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
            <h1 className="max-w-4xl text-5xl font-semibold leading-none text-primary md:text-8xl">
              Zing Jen
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-secondary md:text-2xl md:leading-9">
              Hedge Fund Technology
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-3"
            variants={fadeInUp}
          >
            <Button
              as={Link}
              href="/projects"
              color="primary"
              variant="flat"
              size="lg"
              radius="lg"
            >
              View Projects
            </Button>
            <Button
              as={Link}
              href="/ChewZingJen_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              color="secondary"
              variant="flat"
              size="lg"
              radius="lg"
            >
              View Resume
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-3 gap-3 rounded-2xl bg-[#7373731f] p-4 backdrop-blur"
          variants={fadeInUp}
        >
          {snapshot.map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <span className="text-3xl font-semibold text-primary">
                {item.value}
              </span>
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      <motion.section className="flex flex-col gap-4" variants={fadeInUp}>
        <h2 className="text-xl font-semibold text-secondary">Focus</h2>
        <div className="flex flex-wrap gap-2">
          {focusAreas.map((area) => (
            <Chip key={area} color="secondary" variant="flat">
              {area}
            </Chip>
          ))}
        </div>
      </motion.section>

      <motion.section className="flex flex-col gap-5" variants={fadeInUp}>
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold text-secondary">
            Featured Projects
          </h2>
          <Button as={Link} href="/projects" size="sm" variant="light">
            See all
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {featuredProjects.slice(0, 3).map((project) => (
            <Link
              key={project.id}
              href="/projects"
              className="rounded-2xl bg-[#7373731f] p-4 transition hover:-translate-y-1 hover:bg-primary/10"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <span className="text-sm text-secondary">{project.year}</span>
                </div>
                <p className="line-clamp-3 text-sm leading-6 text-secondary">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mt-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        variants={fadeInUp}
      >
        <p className="text-sm font-medium text-secondary">Connect with me</p>
        <div className="flex gap-3">
          <Button
            as={Link}
            aria-label="Open GitHub profile"
            href={contacts[0].link}
            target="_blank"
            rel="noopener noreferrer"
            isIconOnly
            color="secondary"
            variant="flat"
            size="md"
          >
            <GitHubIcon />
          </Button>
          <Button
            as={Link}
            aria-label="Open LinkedIn profile"
            href={contacts[1].link}
            target="_blank"
            rel="noopener noreferrer"
            isIconOnly
            color="secondary"
            variant="flat"
            size="md"
          >
            <LinkedInIcon />
          </Button>
          <Button
            as={Link}
            aria-label="Send email"
            href={contacts[2].link}
            target="_blank"
            rel="noopener noreferrer"
            isIconOnly
            color="secondary"
            variant="flat"
            size="md"
          >
            <EmailIcon />
          </Button>
        </div>
      </motion.section>
    </motion.main>
  );
}
