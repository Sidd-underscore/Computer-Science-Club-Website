import { cn } from "@/lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "md:auto-rows mx-auto grid max-w-7xl border-collapse grid-cols-1 border border-neutral-200 dark:border-white/5 md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  index,
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex h-full flex-col space-y-4 border border-neutral-200 bg-white p-4 duration-200 dark:border-white/5 dark:bg-black",
        className,
      )}
    >
      <div
        className={`${index === 3 || index === 4 ? "h-[12rem]" : "h-[6rem]"}`}
      >
        {header}
      </div>
      <div className="relative z-50">
        {icon}
        <div className="mb-2 mt-2 font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
