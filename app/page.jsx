import { EmailForm } from "@/components/home/email-form";
import { HomeGrid } from "@/components/home/grid";
import Testimonials from "@/components/home/testimonials";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-screen w-screen">
      <div className="relative z-10 mx-auto max-w-4xl pb-2.5 px-2.5 pt-28 antialiased md:pb-4">
        <h1 className="relative z-10 bg-gradient-to-br from-indigo-500 to-pink-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          Lincoln Computer Science Association
        </h1>
        <p></p>
        <p className="relative z-10 mx-auto my-2 max-w-lg text-center text-sm text-neutral-500">
          A place for web designers, scratch enjoyers, ThinkPad owners, Unity
          wizards, and enthusiasts of all types to connect, iterate, and build.
          We use Arch, btw.{" "}
          <Link
            href="/about"
            className="underline hover:text-pink-400 dark:hover:text-pink-300"
          >
            Learn more!
          </Link>
        </p>

        <div className="py-10">
          <EmailForm />
        </div>

        <div className="pt-14">
          <HomeGrid />
        </div>

        <div className="pt-14">
          <Testimonials />
        </div>
      </div>
    </div>
  );
}
