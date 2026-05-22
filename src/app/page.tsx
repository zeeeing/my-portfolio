"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { motion } from "motion/react";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "./ui/icons";
import { contacts } from "./data/contacts";

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
    <motion.div
      className="flex flex-col justify-center items-center h-screen w-full gap-12"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <div className="flex flex-col text-center p-4 gap-6">
        <motion.h1
          className="text-2xl font-semibold md:text-5xl text-secondary"
          variants={fadeInUp}
        >
          Hi There!
        </motion.h1>
        <motion.h2
          className="text-5xl font-semibold md:text-8xl text-primary"
          variants={fadeInUp}
        >
          <span className="text-2xl md:text-5xl text-gray-500">{`I'm`}</span>{" "}
          Zing Jen,
        </motion.h2>
        <motion.ul
          className="flex flex-col text-sm md:text-xl text-secondary font-medium pt-2"
          variants={fadeInUp}
        >
          <li>{`<4th Year Engineering Undergraduate @ NUS />`}</li>
          <li>{`<Aspiring Software Engineer />`}</li>
        </motion.ul>
      </div>

      <motion.div variants={fadeInUp}>
        <Button
          as={Link}
          href={"/projects"}
          color="primary"
          variant="flat"
          size="lg"
          radius="lg"
        >
          View Projects
        </Button>
      </motion.div>

      <motion.div
        className="fixed bottom-0 left-0 w-full py-10"
        variants={fadeInUp}
      >
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm md:text-xl text-secondary font-medium">
            Connect with me:
          </p>
          <div className="flex gap-4 items-center">
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
        </div>
      </motion.div>
    </motion.div>
  );
}
