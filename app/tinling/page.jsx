import Image from "next/image";
export default function TinlingPage() {
  return (
<div className="w-screen h-screen relative">
      <div className="h-full w-full dark:bg-neutral-900 bg-white py-10 dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-neutral-950 bg-neutral-200 [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,.6)_1%,black)]" />
        <div className="max-w-4xl mx-auto pt-20 pb-2.5 md:pb-4 px-2.5 md:px-4 antialiased relative z-10">
        <h1 className="relative z-10 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-pink-500 text-center font-bold">
            The Man, The Myth, <Image className="h-40 my-5 rounded-lg" src="/tinling/tinling.png" alt="Tinling" width={1000} height={1000} /> Tinling
        </h1>
        <hr className="my-10 rounded-full border-neutral-400 dark:border-neutral-700" />
       <div className="flex items-center justify-center">
       <p className="p-4">As we look back and ponder, how did it all start? Tinling is the backbone of LCSA and is our one and only god.
            A man of many faces (many wide) and one that will change the course of any day. 
        </p>
        <Image className="w-1/3 rounded-lg" src="/tinling/tinling_mustache.jpg" alt="Tinling" width={1000} height={1000} />
       </div>
       <div className="flex items-center justify-center">
       <Image className="w-1/3 rounded-lg" src="/tinling/man_whitnessing_tinling.png" alt="Tinling" width={1000} height={1000} />
       <p className="p-4">Example of a man whitnessing the miracle of the tinling for the first time in his life. Notice the immense joy radiating from him.</p>
       </div>
       <div className="flex items-center justify-center pb-8">
       <p className="p-4">If you join us in this journey, you will be witnessing the miracle of the tinling for the first time in your life.
            You will be able to see the power of the tinling and the impact it can have on your life.
            And you will be spared when the wrath of the tinling comes.
        </p>
        <Image className="w-1/3 rounded-lg" src="/tinling/tinling_angel.jpg" alt="Tinling" width={1000} height={1000} />
       </div>
        </div>
        </div>
      </div>
  )}