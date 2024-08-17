import Link from "next/link";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";

export function Navbar() {
  return (
    <div className="fixed md:top-4 z-20 flex w-screen justify-center">
      <nav className="flex w-full max-w-4xl items-center justify-between border-2 border-neutral-200 bg-neutral-50 text-sm backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900">
        <Link
          href="/about"
          className="pl-4 text-neutral-600 hover:text-neutral-600 dark:hover:text-neutral-500 hover:dark:!text-neutral-300"
        >
          about
        </Link>
          <Link
            href="/"
            className="h-8 w-8 bg-gradient-to-br from-indigo-400 to-pink-400 transition-all hover:from-indigo-400/25 hover:to-pink-400/25 dark:from-indigo-700/75 dark:to-pink-700/75 hover:dark:from-indigo-500/25 hover:dark:to-pink-500/25"
          />
        <ThemeSwitcher className="!bg-transparent dark:!bg-transparent border-none text-neutral-600 hover:text-neutral-600 dark:hover:text-neutral-500 hover:dark:!text-neutral-300" />
      </nav>
    </div>
  );
}
