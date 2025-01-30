import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Header() {
  return (
    <div className="fixed max-w-[90%] xl:max-w-[1223px] w-full z-10 select-none">
      <div className="flex justify-between items-center px-6 py-4 rounded-2xl bg-[#7373731f] mt-4 sm:mt-8 backdrop-blur font-bold">
        <div className="text-2xl">
          <Link href={"/"}>CZJ</Link>
        </div>
        <div className="flex gap-12">
          <Link href={"/"}>Home</Link>
          <Link href={"/projects"}>Projects</Link>
          <Link href={"/about"}>About</Link>
        </div>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
