import { EmailForm } from "@/components/home/email-form";
import Testimonials from "@/components/home/testimonials";

export default function AboutPage() {
  return (
    <div className="relative h-screen w-screen">
      <div className="relative z-10 mx-auto max-w-4xl px-2.5 pb-2.5 pt-28 text-center antialiased md:px-4 md:pb-4">
        <h1 className="relative z-10 bg-gradient-to-br from-indigo-500 to-pink-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          About Us
        </h1>
        <p className="relative z-10 mx-auto my-2 max-w-lg text-center text-sm text-neutral-500">
          Lincoln Computer Science Association (LCSA) is a fun club meant to
          bring together the coding population of Lincoln High School.
        </p>

        <p className="mt-10 text-neutral-700 dark:text-neutral-300">
          We meet (mostly) all flex days in the computer lab, <code>207</code>.
          Feel free to bring your friends and hop in to see if we&apos;re there!
          However, if you want a more reliable way of knowing when and where
          we&apos;re meeting, enter your email in the home page to access an
          invite to the Discord server!
        </p>

        <p className="mt-10 text-neutral-700 dark:text-neutral-300">
          On this same Discord server, you&apos;ll find the topics of discussion
          for each meeting. They change frequently and are rarely identical. We
          host anything from competitions to discussions, and even informational
          sessions where your peers teach you some fun coding stuff!
        </p>

        <p className="mt-10 text-neutral-700 dark:text-neutral-300">
          If you have any questions, the Discod server is also the place to go
          :) We would love hearing any feedback you might have!
        </p>

        <div className="mt-10">
        <EmailForm />
        </div>

        <hr className="my-10  border-neutral-400 dark:border-neutral-700" />

        <Testimonials />

        <h3 className="relative z-10 mt-20 bg-gradient-to-br from-indigo-400 to-pink-400 bg-clip-text text-center text-xl font-medium text-transparent opacity-75 md:text-2xl">
          Welcome to LCSA!
        </h3>
      </div>
    </div>
  );
}
