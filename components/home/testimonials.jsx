import { CardStack } from "@/components/ui/card-stack";

const testimonials = [
  {
    id: 0,
    content:
      "I met one of my first friends in high school, Eliza, thanks to the club! This really helped me feel welcome and ready for my new high school.",
    name: "Sidd",
    designation: "Joined Freshman year",
  },
  // ... more soon
];

export default function Testimonials() {
  return (
    <div className="mx-auto max-w-4xl pb-10 text-center">
      <h2 className="text-2xl font-medium text-neutral-800 dark:text-neutral-200 md:text-3xl">
        What our members have to say
      </h2>

      <div className="mt-10">
        <CardStack items={testimonials} />
      </div>
    </div>
  );
}
