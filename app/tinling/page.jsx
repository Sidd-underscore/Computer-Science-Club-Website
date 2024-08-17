import Image from "next/image";

export default function TinlingPage() {
  return (
    <div className="relative h-screen w-screen">
        <div className="relative z-10 mx-auto max-w-4xl pb-2.5  pt-20 antialiased md:pb-4">
          <h1 className="relative z-10 bg-gradient-to-br from-indigo-500 to-pink-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
            The Man, The Myth,{" "}
            <Image
              className="my-5 h-40 "
              src="/tinling/tinling.png"
              alt="Tinling"
              width={1000}
              height={1000}
            />{" "}
            Tinling
          </h1>
          <hr className="my-10  border-neutral-400 dark:border-neutral-700" />
          <div className="flex items-center justify-center">
            <p className="p-4">
              As we look back and ponder, how did it all start? Tinling is the
              backbone of LCSA and is our one and only god. A man of many faces
              (many wide) and one that will change the course of any day.
            </p>
            <Image
              className="w-1/3 "
              src="/tinling/tinling_mustache.jpg"
              alt="Tinling"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              className="w-1/3 "
              src="/tinling/man_whitnessing_tinling.png"
              alt="Tinling"
              width={1000}
              height={1000}
            />
            <p className="p-4">
              Example of a man whitnessing the miracle of the tinling for the
              first time in his life. Notice the immense joy radiating from him.
            </p>
          </div>
          <div className="flex items-center justify-center pb-8">
            <p className="p-4">
              If you join us in this journey, you will be witnessing the miracle
              of the tinling for the first time in your life. You will be able
              to see the power of the tinling and the impact it can have on your
              life. And you will be spared when the wrath of the tinling comes.
            </p>
            <Image
              className="w-1/3 "
              src="/tinling/tinling_angel.jpg"
              alt="Tinling"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
  );
}
