import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Header() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const hoverAnimation = {
    whileHover: { scale: 1.2 },
    whileTap: { scale: 0.8 },
    transition: { duration: 0.2, ease: "easeInOut" },
  };

  return (
    <div className="fixed max-w-[90%] xl:max-w-[1223px] w-full z-10 select-none">
      <div className="flex justify-between items-center px-6 py-4 rounded-2xl bg-[#7373731f] mt-4 sm:mt-8 backdrop-blur font-bold">
        <div className="text-2xl">
          <Link href={"/"}>CZJ</Link>
        </div>
        <div className="flex gap-12">
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
          <motion.div
            {...hoverAnimation}
            className={isActive("/about") ? "text-primary" : ""}
          >
            <Link href={"/about"}>About</Link>
          </motion.div>
        </div>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
