import { CardStack } from "@/components/ui/card-stack";

function getStudentStatus(graduationRange) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const endYear = Number(graduationRange.split('-')[1]);

  if (currentYear > endYear) {
    return 'an Alumni';
  }

  let yearsUntilGraduation = endYear - currentYear;

  if (yearsUntilGraduation === 4) {
    return currentMonth >= 6 ? 'a Sophomore' : 'a Freshman';
  } else if (yearsUntilGraduation === 3) {
    return currentMonth >= 6 ? 'a Junior' : 'a Sophomore';
  } else if (yearsUntilGraduation === 2) {
    return currentMonth >= 6 ? 'a Senior' : 'a Junior';
  } else if (yearsUntilGraduation === 1) {
    return currentMonth >= 6 ? 'an Alumni' : 'a Senior';
  } else {
    return 'an Alumni';
  }
}


const testimonials = [
  {
    id: 0,
    content:
      "I met one of my first friends in high school, Eliza, thanks to the club! This really helped me feel welcome and ready for my new high school.",
    name: "Sidd",
    designation: "Joined Freshman year • Currently " + getStudentStatus("2027-2028"),
    username: "@sidd_"
  },
  {
    id: 1,
    content:
      "My favorite part about LCSA is how active the community is.",
    name: "Edwin",
    designation: "Joined Freshman year • Currently " + getStudentStatus("2027-2028"),
    username: "@edwin123123"
  },
  {
    id: 2,
    content:
      "When I first joined in April 2023 the community was nothing but accepting, I was immediately adopted into the community and integrated into the social culture. In between that and the help with coding LCSA has been an amazing place for me to hone my coding skills and expand my circles.",
    name: "Isabelle",
    designation: "Joined Freshman year • Currently " + getStudentStatus("2026-2027"),
    username: "@shattered_irises"
  },
  {
    id: 3,
    content:
      "I feel welcomed and included by the community, which is very friendly and I don't feel afraid to voice my opinions and ideas.",
    name: "Jacob",
    designation: "Joined Freshman year • Currently " + getStudentStatus("2027-2028"),
    username: "@pineocoles"
  },
  {
    id: 4,
    content:
      "I really enjoyed the chance to meet others with similar interests in coding and to have a chance to hear about random topics from both other members and the club leaders!",
    name: "Zoe",
    designation: "Joined Freshman year • Currently " + getStudentStatus("2026-2027"),
    username: "@fiverattack"
  },
];

export default function Testimonials() {
  return (
    <div className="mx-auto max-w-4xl pb-10 text-center">
      <h2 className="text-2xl font-medium text-neutral-800 dark:text-neutral-200 md:text-3xl">
        What our members have to say
      </h2>

      <div className="mt-24">
        <CardStack items={testimonials} />
      </div>
    </div>
  );
}
