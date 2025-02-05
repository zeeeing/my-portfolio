"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "./ui/icons";
import { contacts } from "./ui/constants";

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

  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const buttonSize = isSmallScreen ? "md" : "lg";
  const footerButtonSize = isSmallScreen ? "sm" : "md";

  return (
    <motion.div
      className="flex flex-col justify-center items-center h-screen w-full gap-12"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <div className="flex flex-col text-center p-4 gap-6">
        <motion.h1
          className="text-2xl md:text-5xl font-serif font-bold text-secondary"
          variants={fadeInUp}
        >
          Hi There!
        </motion.h1>
        <motion.h2
          className="text-5xl md:text-8xl font-serif font-bold text-primary"
          variants={fadeInUp}
        >
          <span className="text-5xl text-gray-500">I'm</span> Zing Jen,
        </motion.h2>
        <motion.ul
          className="flex flex-col text-sm md:text-xl text-secondary font-medium pt-2"
          variants={fadeInUp}
        >
          <li>{`<3rd Year Engineering Undergraduate @ NUS />`}</li>
          <li>{`<Aspiring Software Engineer />`}</li>
        </motion.ul>
      </div>

      <motion.div variants={fadeInUp}>
        <Button
          as={Link}
          href={"/projects"}
          color="primary"
          variant="flat"
          size={buttonSize}
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
              href={contacts[0].link}
              target="_blank"
              rel="noopener noreferrer"
              isIconOnly
              color="secondary"
              variant="flat"
              size={footerButtonSize}
            >
              <GitHubIcon />
            </Button>
            <Button
              as={Link}
              href={contacts[1].link}
              target="_blank"
              rel="noopener noreferrer"
              isIconOnly
              color="secondary"
              variant="flat"
              size={footerButtonSize}
            >
              <LinkedInIcon />
            </Button>
            <Button
              as={Link}
              href={contacts[2].link}
              target="_blank"
              rel="noopener noreferrer"
              isIconOnly
              color="secondary"
              variant="flat"
              size={footerButtonSize}
            >
              <EmailIcon />
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
