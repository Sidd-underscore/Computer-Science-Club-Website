import { EmailForm } from "@/components/home/email-form";
import { HomeGrid } from "@/components/home/grid";

export default function Home() {
  return (
    <div className="w-screen h-screen relative">
      <div className="h-full w-full dark:bg-neutral-900 bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-neutral-200 [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,.6)_1%,black)]" />
        <div className="max-w-4xl mx-auto pt-20 pb-2.5 md:pb-4 px-2.5 md:px-4 antialiased relative z-10">
          <h1 className="relative z-10 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-pink-500 text-center font-bold">
            Lincoln Computer Science Association
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            A place for web designers, scratch enjoyers, ThinkPad owners, Unity
            wizards, and enthusiasts of all types to connect, iterate, and
            build.
          </p>

          <div className="py-10">
            <EmailForm />
          </div>

          <div className="pt-14">
            <HomeGrid />
          </div>
        </div>
      </div>
    </div>
  );
}
