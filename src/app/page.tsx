"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "./ui/icons";
import { contacts } from "./constants/constants";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full gap-12">
      <div className="flex flex-col text-center p-4 gap-6">
        <h1 className="text-5xl font-serif font-bold text-secondary">Hi There!</h1>
        <h2 className="text-8xl font-serif font-bold text-primary">
          <span className="text-5xl text-gray-500">I'm</span> Zing Jen,
        </h2>
        <ul className="flex flex-col text-xl text-secondary font-medium pt-2">
          <li>{`<3rd Year Engineering Undergraduate @ NUS />`}</li>
          <li>{`<Aspiring Software Engineer />`}</li>
        </ul>
      </div>
      <Link href="/projects">
        <Button color="primary" variant="flat" size="lg" radius="lg">
          View Projects
        </Button>
      </Link>

      <div className="fixed bottom-0 left-0 w-full py-10">
        <div className="flex flex-col items-center gap-4">
          <p className="text-xl text-secondary">Connect with me:</p>
          <div className="flex gap-4 items-center">
            <Button isIconOnly color="secondary" variant="flat">
              <a
                href={contacts[0].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
            </Button>
            <Button isIconOnly color="secondary" variant="flat">
              <a
                href={contacts[1].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            </Button>
            <Button isIconOnly color="secondary" variant="flat">
              <a
                href={contacts[2].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <EmailIcon />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
