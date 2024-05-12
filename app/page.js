import { EmailForm } from "@/components/home/email-form";
import { HomeGrid } from "@/components/home/grid";
import { BackgroundBeams } from "@/components/ui/beams";

export default function Home() {
  return (
    <div className="w-screen h-screen relative">
      <div className="max-w-4xl mx-auto pt-20 pb-2.5 md:pb-4 px-2.5 md:px-4 antialiased relative z-10">
        <h1 className="relative z-10 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-pink-500 text-center font-bold">
          Lincoln Computer Science Association
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          A place for web designers, scratch enjoyers, ThinkPad owners, Unity
          wizards, and enthousiats of all types to connect, iterate, and build.
        </p>

        <div className="py-10">
          <EmailForm />
          </div>

        <div className="pt-14">
          <HomeGrid />
        </div>
      </div>
      <BackgroundBeams className="h-screen w-screen top-0 left-0" />
    </div>
  );
}
