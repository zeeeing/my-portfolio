import { ThemeSwitcher } from "./components/ThemeSwitcher";

export default function Header() {
  return (
    <div className="absolute w-full">
      <header className="flex justify-end p-4">
        <ThemeSwitcher />
      </header>
    </div>
  );
}
