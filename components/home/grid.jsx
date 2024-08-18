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
import { useIsMobile } from "@/lib/utils";

const Skeleton = () => (
  <div className="flex h-full min-h-[6rem] w-full flex-1 bg-gradient-to-bl from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800" />
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
      className="flex h-full w-full flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="z-10 flex items-start space-x-2 border border-neutral-100 bg-neutral-50 p-1.5 backdrop-blur-sm dark:border-neutral-700/50 dark:bg-neutral-800/10"
      >
        <PersonIcon className="h-5 w-5 flex-shrink-0 p-0.5 text-neutral-400" />
        <p className="text-xs text-neutral-500">
          how would you improve this code? I added comments but...
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="max-w-3/4 z-10 ml-auto flex w-fit items-center justify-end space-x-2 border border-neutral-100 bg-white p-1.5 backdrop-blur-sm dark:border-neutral-700/50 dark:bg-neutral-700/10"
      >
        <p className="text-right text-xs text-neutral-500">
          lgtm! maybe add a different variable...
        </p>
        <div className="h-4 w-4 flex-shrink-0 bg-gradient-to-br from-rose-500 to-indigo-500" />
      </motion.div>
    </motion.div>
  );
}

function Education() {
  const isMobile = useIsMobile();

  console.log(isMobile);

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
      initial={isMobile ? "hover" : "initial"}
      key={isMobile}
      animate="animate"
      whileHover="hover"
      className="h-[12rem] w-full flex-row p-2 flex flex-1 space-x-2 space-y-0 overflow-x-auto" 
    >
      <motion.div
        variants={first}
        className="flex w-full flex-col items-center justify-center border border-neutral-200 bg-neutral-50 p-4 backdrop-blur-sm dark:border-neutral-700/50 dark:bg-neutral-900/50 md:h-full md:w-1/3"
      >
        <p className="text-center text-xs text-neutral-400">
          In 1 week at 01:67 PM
        </p>
        <p className="mt-4 text-center text-xs font-semibold text-neutral-500 dark:text-neutral-300 sm:text-sm md:text-neutral-400">
          Web Design Fundamentals
        </p>
        <p className="mt-3 border border-emerald-400/25 bg-emerald-400/25 px-4 py-1 text-xs text-neutral-500 dark:border-emerald-500 dark:bg-emerald-600/50 dark:text-white">
          Beginner
        </p>
      </motion.div>
      <motion.div className="relative z-20 flex w-full flex-col items-center justify-center border border-neutral-200 bg-neutral-100 p-4 backdrop-blur-sm dark:border-neutral-700/50 dark:bg-neutral-900/75 md:h-full md:w-1/3">
        <p className="text-center text-xs text-neutral-400">
          Today at 12:45 AM
        </p>
        <p className="mt-4 text-center text-xs font-semibold text-neutral-500 dark:text-neutral-300 sm:text-sm">
          Algorithms and Sorting
        </p>
        <p className="mt-3 border border-yellow-400/50 bg-yellow-500/30 px-4 py-1 text-xs text-neutral-500 dark:border-yellow-500/75 dark:bg-yellow-600/50 dark:text-white">
          Intermediate
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="flex w-full flex-col items-center justify-center border border-neutral-200 bg-neutral-50 p-4 backdrop-blur-sm dark:border-neutral-700/50 dark:bg-neutral-900/50 md:h-full md:w-1/3"
      >
        <p className="text-center text-xs text-neutral-400">
          In 2 days at 08:01 AM
        </p>
        <p className="mt-4 text-center text-xs font-semibold text-neutral-500 dark:text-neutral-300 sm:text-sm md:text-neutral-400">
          Big O Notation Crashcourse
        </p>
        <p className="mt-3 border border-red-400/25 bg-red-400/25 px-4 py-1 text-xs text-neutral-500 dark:border-red-500/50 dark:bg-red-600/30 dark:text-white">
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
      className="bg-dot-black/[0.2] dark:bg-dot-white/[0.2] flex h-full w-full  flex-1 flex-col space-y-2"
      style={{
        background: "linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div
        initial="initial"
        animate="animate"
        variants={variants}
        className="bg-dot-black/[0.2] dark:bg-dot-white/[0.5] flex h-full w-full  flex-1 flex-col space-y-2"
      >
        <motion.div className="h-full w-full "></motion.div>
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
      className="flex h-full min-h-[12rem] w-full flex-1 flex-row space-x-2"
    >
      <Table className="!overflow-hidden">
        <TableHeader>
          <TableRow className="!text-xs">
            <TableHead>Topic</TableHead>
            <TableHead className="md:hidden">Date</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="overflow-hidden">
          <motion.tr
            variants={first}
            className="hover:bg-neutral-100/50 data-[state=selected]:bg-neutral-100 dark:hover:bg-neutral-800/50 dark:data-[state=selected]:bg-neutral-800"
          >
            <TableCell>Leetcode Problems</TableCell>
            <TableCell className="md:hidden">5/11/2024</TableCell>
          </motion.tr>
          <motion.tr
            variants={second}
            className="hover:bg-neutral-100/50 data-[state=selected]:bg-neutral-100 dark:hover:bg-neutral-800/50 dark:data-[state=selected]:bg-neutral-800"
          >
            <TableCell>Hackathon (Secret Theme)</TableCell>
            <TableCell className="md:hidden">11/07/2025</TableCell>
          </motion.tr>
          <motion.tr
            variants={third}
            className="hover:bg-neutral-100/50 data-[state=selected]:bg-neutral-100 dark:hover:bg-neutral-800/50 dark:data-[state=selected]:bg-neutral-800"
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
    <BentoGrid className="mx-auto max-w-4xl">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          index={i}
          icon={item.icon}
          className={
            (i === 3 || i === 6 ? "md:col-span-2" : "") +
            " h-full backdrop-blur-md dark:bg-neutral-900/25 hover:dark:bg-neutral-900/25"
          }
        />
      ))}
    </BentoGrid>
  );
}
