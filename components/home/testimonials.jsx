import { CardStack } from "@/components/ui/card-stack";

const testimonials = [
  {
    id: 0,
    content:
      "I met one of my first friends in high school, Eliza, thanks to the club! This really helped me feel welcome and ready for my new high school.",
    name: "Sidd",
    designation: "Joined Freshman year",
  },
  {
    id: 1,
    content:
      "My favorite part about LCSA is how active the community is.",
    name: "Edwin",
    designation: "Joined Freshman year",
  },
  {
    id: 2,
    content:
      "When I first joined in April 2023 the community was nothing but accepting, I was immediately adopted into the community and integrated into the social culture. In between that and the help with coding LCSA has been an amazing place for me to hone my coding skills and expand my circles.",
    name: "Eliza",
    designation: "Joined Freshman year",
  },
  {
    id: 3,
    content:
      "I feel welcomed and included by the community, which is very friendly and I don't feel afraid to voice my opinions and ideas.",
    name: "Jacob",
    designation: "Joined Freshman year",
  },
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
