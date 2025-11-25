 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  DropdownSection,
} from "@heroui/react";
import { motion } from "motion/react";
import { Download, ExternalLink, ChevronsDown, AlignRight } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Header() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const hoverAnimation = {
    whileHover: { scale: 1.2 },
    whileTap: { scale: 0.8 },
    transition: { duration: 0.2, ease: "easeInOut" },
  };

  const hoverAnimationLogo = {
    whileHover: { scale: 1.5 },
    whileTap: { scale: 0.8 },
    transition: { duration: 0.2, ease: "easeInOut" },
  };

  return (
    <div className="fixed max-w-[90%] xl:max-w-[1223px] w-full z-10 select-none">
      <div className="relative flex justify-between items-center px-6 py-4 rounded-2xl bg-[#7373731f] mt-4 md:mt-8 backdrop-blur font-bold">
        {/* left section */}
        <motion.div {...hoverAnimationLogo} className="text-base md:text-2xl">
          <Link href={"/"}>CZJ</Link>
        </motion.div>
        {/* middle section */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-12">
          <motion.div
            {...hoverAnimation}
            className={isActive("/") ? "text-primary" : ""}
          >
            <Link href={"/"}>Home</Link>
          </motion.div>
          <motion.div
            {...hoverAnimation}
            className={isActive("/projects") ? "text-primary" : ""}
          >
            <Link href={"/projects"}>Projects</Link>
          </motion.div>
        </div>
        {/* right section */}
        <div className="flex gap-4">
          <div className="hidden md:flex" id="resumeDropdown">
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="flat"
                  size="sm"
                  color="primary"
                  endContent={<ChevronsDown size={16} />}
                >
                  Resume
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem
                  key="view"
                  startContent={<ExternalLink size={16} />}
                >
                  <Link
                    href="/ChewZingJen_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Online
                  </Link>
                </DropdownItem>
                <DropdownItem
                  key="download"
                  startContent={<Download size={16} />}
                >
                  <a
                    href="/ChewZingJen_Resume.pdf"
                    download="ChewZingJen_Resume.pdf"
                  >
                    Download Resume
                  </a>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <Dropdown>
              <DropdownTrigger>
                <div className="md:hidden">
                  <AlignRight />
                </div>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownSection title="My Portfolio">
                  <DropdownItem
                    key="home"
                    className={isActive("/") ? "text-primary" : ""}
                    href="/"
                  >
                    Home
                  </DropdownItem>
                  <DropdownItem
                    key="projects"
                    className={isActive("/projects") ? "text-primary" : ""}
                    href="/projects"
                  >
                    Projects
                  </DropdownItem>
                </DropdownSection>
                <DropdownSection title="My Resume">
                  <DropdownItem
                    key="resume-view"
                    startContent={<ExternalLink size={16} />}
                    href="/ChewZingJen_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </DropdownItem>
                  <DropdownItem
                    key="resume-download"
                    startContent={<Download size={16} />}
                    href="/ChewZingJen_Resume.pdf"
                    download="ChewZingJen_Resume.pdf"
                  >
                    Download
                  </DropdownItem>
                </DropdownSection>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}
