"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  ArchiveIcon,
  BackpackIcon,
  CrumpledPaperIcon,
  HeartIcon,
  MixIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { motion } from "framer-motion";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-bl from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

function OpenCollaboration() {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex w-full h-full min-h-[6rem] flex-col space-y-2 p-2"
    >
      <motion.div
        variants={variants}
        className="flex rounded-2xl items-start border border-neutral-100 dark:border-neutral-700/50 p-1.5 space-x-2 bg-neutral-50 dark:bg-neutral-800/10 backdrop-blur-sm"
      >
        <PersonIcon className="w-6 h-6 p-1 flex-shrink-0 text-neutral-400 bg-neutral-100 dark:bg-neutral-700 rounded-full" />
        <p className="text-xs text-neutral-500">
          how would you improve this code? I added comments but...
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex rounded-2xl items-center justify-end ml-auto border w-fit max-w-3/4 border-neutral-100 dark:border-neutral-700/50 p-1.5 space-x-2 bg-white dark:bg-neutral-700/10 backdrop-blur-sm"
      >
        <p className="text-xs text-right text-neutral-500">
          lgtm! maybe add a different variable...
        </p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-rose-500 to-indigo-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
}

function Education() {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="md:flex md:flex-1 space-y-2 w-full h-full min-h-[12rem] flex-row space-x-2 md:space-y-0 p-2"
    >
      <motion.div
        variants={first}
        className="md:h-full w-full md:w-1/3 rounded-2xl dark:border-neutral-700/50 bg-neutral-50 p-4 dark:bg-neutral-800/25 backdrop-blur-sm border border-neutral-200 flex flex-col items-center justify-center"
      >
        <p className="text-neutral-400 text-xs text-center">
          In 1 week at 01:67 PM
        </p>
        <p className="font-semibold sm:text-sm text-xs text-center md:text-neutral-400 text-neutral-500 dark:text-neutral-300 mt-4">
          Web Design Fundamentals
        </p>
        <p className="border border-emerald-400 dark:border-emerald-500 rounded-full px-4 py-1 mt-3 text-xs text-neutral-500 dark:text-white bg-emerald-400/50 dark:bg-emerald-600/50">
          Beginner
        </p>
      </motion.div>
      <motion.div className="md:h-full relative z-20 w-full md:w-1/3 rounded-2xl bg-neutral-100 p-4 dark:bg-neutral-800/50 backdrop-blur-sm dark:border-neutral-700/50 border border-neutral-200 flex flex-col items-center justify-center">
        <p className="text-neutral-400 text-xs text-center">
          Today at 12:45 AM
        </p>
        <p className="font-semibold sm:text-sm text-xs text-center text-neutral-500 dark:text-neutral-300 mt-4">
          Algorithms and Sorting
        </p>
        <p className="border dark:border-yellow-500/75 border-yellow-400/50 rounded-full px-4 py-1 mt-3 text-xs text-neutral-500 dark:text-white bg-yellow-500/30 dark:bg-yellow-600/50">
          Intermediate
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="md:h-full w-full md:w-1/3 rounded-2xl bg-neutral-50 p-4 dark:bg-neutral-800/25 backdrop-blur-sm dark:border-neutral-700/50 border border-neutral-200 flex flex-col items-center justify-center"
      >
        <p className="text-neutral-400 text-xs text-center">
          In 2 days at 08:01 AM
        </p>
        <p className="font-semibold sm:text-sm text-xs text-center md:text-neutral-400 text-neutral-500 dark:text-neutral-300 mt-4">
          Big O Notation Crashcourse
        </p>
        <p className="border border-red-400/50 dark:border-red-500/50 rounded-full px-4 py-1 mt-3 text-xs text-neutral-500 dark:text-white bg-red-500/30 dark:bg-red-600/30">
          Advanced
        </p>
      </motion.div>
    </motion.div>
  );
}

function Diversity() {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    hover: {
      backgroundPosition: "100% 50%",
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      whileHover="hover"
      className="flex flex-1 w-full min-h-[6rem] h-full dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background: "linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div
        initial="initial"
        animate="animate"
        variants={variants}
        className="flex flex-1 w-full h-full dark:bg-dot-white/[0.5] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      >
        <motion.div className="h-full w-full rounded-lg"></motion.div>
      </motion.div>
    </motion.div>
  );
}

function Contests() {
  const first = {
    initial: {
      y: -2,
    },
    hover: {
      y: 0,
    },
  };
  const second = {
    initial: {
      y: -16,
    },
    hover: {
      y: 0,
    },
  };
  const third = {
    initial: {
      y: -32,
    },
    hover: {
      y: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[12rem] flex-row space-x-2 p-2"
    >
      <Table>
        <TableHeader>
          <TableRow className="!text-xs">
            <TableHead>Topic</TableHead>
            <TableHead className="md:hidden">Date</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <motion.tr
            variants={first}
            className="transition-colors hover:bg-neutral-100/50 data-[state=selected]:bg-neutral-100 dark:hover:bg-neutral-800/50 dark:data-[state=selected]:bg-neutral-800"
          >
            <TableCell>Leetcode Problems</TableCell>
            <TableCell className="md:hidden">5/11/2024</TableCell>
          </motion.tr>
          <motion.tr
            variants={second}
            className="transition-colors hover:bg-neutral-100/50 data-[state=selected]:bg-neutral-100 dark:hover:bg-neutral-800/50 dark:data-[state=selected]:bg-neutral-800"
          >
            <TableCell>Hackathon (Secret Theme)</TableCell>
            <TableCell className="md:hidden">11/07/2025</TableCell>
          </motion.tr>
          <motion.tr
            variants={third}
            className="transition-colors hover:bg-neutral-100/50 data-[state=selected]:bg-neutral-100 dark:hover:bg-neutral-800/50 dark:data-[state=selected]:bg-neutral-800"
          >
            <TableCell>Code and Talk!</TableCell>
            <TableCell className="md:hidden">31/25/2025</TableCell>
          </motion.tr>
        </TableBody>
      </Table>
    </motion.div>
  );
}

const iconClassName = "h-4 w-4 text-neutral-500 fill-neutral-500";

const items = [
  {
    title: "Open Collaboration",
    description:
      "Work on problems, solve issues, and have fun together. We believe this is the best way to learn and grow!",
    header: <OpenCollaboration />,
    icon: (
      <span className="flex items-center">
        <PersonIcon className={iconClassName} />
        <HeartIcon className={iconClassName} />
        <PersonIcon className={iconClassName} />
      </span>
    ),
  },

  {
    title: "Competition Opportunities",
    description: "We provide information of upcoming competitions and events!",
    header: <Skeleton />,
    icon: <ArchiveIcon className={iconClassName} />,
  },
  {
    title: "Diversity at our Core",
    description:
      "We believe that having game devs, web devs, scratchers, hobbiests, algorithmists, and more is what makes us a rich and vibrant group.",
    header: <Diversity />,
    icon: <MixIcon className={iconClassName} />,
  },
  {
    title: "Educational Workshops",
    description:
      "Informal, in depth, and comprehensive learning experiences focused on transferring knowledge while having fun.",
    header: <Education />,
    icon: <BackpackIcon className={iconClassName} />,
  },
  {
    title: "Contests and Events",
    description:
      "We host contests and events so you can strengthen your confidence in your skills and win prizes!",
    header: <Contests />,
    icon: <CrumpledPaperIcon className={iconClassName} />,
  },
];

export function HomeGrid() {
  return (
    <BentoGrid className="max-w-4xl mx-auto pb-10">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={
            (i === 3 || i === 6 ? "md:col-span-2" : "") +
            " dark:bg-neutral-900/25 dark:border-neutral-800 backdrop-blur-md hover:dark:bg-neutral-900/25 hover:dark:border-neutral-700 h-full"
          }
        />
      ))}
    </BentoGrid>
  );
}
