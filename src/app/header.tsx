import Link from "next/link";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 font-serif font-bold">
      <nav className="flex justify-between items-center p-6">
        <div className="text-2xl">CZJ</div>
        <div className="flex gap-12">
          <Link href={"/"}>Home</Link>
          <Link href={"/projects"}>Projects</Link>
          <Link href={"/about"}>About</Link>
        </div>
        <div>
          <ThemeSwitcher />
        </div>
      </nav>
    </div>
  );
}
