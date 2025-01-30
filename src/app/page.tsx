"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { motion } from "motion/react";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "./ui/icons";
import { contacts } from "./constants/constants";

export default function Home() {
  const shakeAnimation = {
    initial: { rotate: 0 },
    animate: { rotate: [0, -10, 10, -10, 0] },
    transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
  };

  const fadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: "1rem" },
    animate: { opacity: 1, y: "0%" },
    transition: { delay, duration: 0.5, ease: "easeOut" },
  });

  return (
    <motion.div
      className="flex flex-col justify-center items-center h-screen w-full gap-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col text-center p-4 gap-6">
        <motion.h1
          className="text-5xl font-serif font-bold text-secondary"
          {...shakeAnimation}
        >
          Hi There!
        </motion.h1>
        <motion.h2
          className="text-8xl font-serif font-bold text-primary"
          {...fadeInUp(1.2)}
        >
          <span className="text-5xl text-gray-500">I'm</span> Zing Jen,
        </motion.h2>
        <motion.ul
          className="flex flex-col text-xl text-secondary font-medium pt-2"
          {...fadeInUp(1.4)}
        >
          <li>{`<3rd Year Engineering Undergraduate @ NUS />`}</li>
          <li>{`<Aspiring Software Engineer />`}</li>
        </motion.ul>
      </div>

      <motion.div {...fadeInUp(1.6)}>
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
        {...fadeInUp(2)}
      >
        <div className="flex flex-col items-center gap-4">
          <p className="text-xl text-secondary font-medium">Connect with me:</p>
          <div className="flex gap-4 items-center">
            <Button
              as={Link}
              href={contacts[0].link}
              target="_blank"
              rel="noopener noreferrer"
              isIconOnly
              color="secondary"
              variant="flat"
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
            >
              <EmailIcon />
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
