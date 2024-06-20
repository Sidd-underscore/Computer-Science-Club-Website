import Link from "next/link";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";

export function Navbar() {
  return (
    <div className="fixed top-4 z-20 flex w-screen justify-center">
      <nav className="group flex w-[768px] items-center justify-between rounded-full border border-neutral-400/50 bg-neutral-100/50 px-4 py-2.5 text-sm shadow-md backdrop-blur-md dark:border-neutral-700/50 dark:bg-neutral-900/50">
        <Link
          href="/about"
          className="z-3 text-neutral-600 transition hover:!text-neutral-700 group-hover:text-neutral-600 hover:dark:!text-neutral-300 dark:group-hover:text-neutral-500"
        >
          about
        </Link>
        <div className="absolute z-[-1] -mx-4 -my-2.5 flex w-full items-center justify-center">
          <Link
            href="/"
            className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-400 to-pink-400 transition-all group-hover:h-[44px] group-hover:w-[768px] group-hover:rounded-full group-hover:from-indigo-400/25 group-hover:to-pink-400/25 dark:from-indigo-700/75 dark:to-pink-700/75 group-hover:dark:from-indigo-500/25 group-hover:dark:to-pink-500/25"
          />
        </div>
        <ThemeSwitcher className="-m-2 -mr-3 rounded-full border-none text-neutral-600 !bg-transparent !backdrop-blur-0 hover:!text-neutral-700 group-hover:text-neutral-600 hover:dark:!text-neutral-300 dark:group-hover:text-neutral-500" />
      </nav>
    </div>
  );
}
