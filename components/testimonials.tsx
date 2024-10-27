import { useState } from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { cn } from "@/lib/utils";
import { InViewDiv } from "./in-view-div";
import { useMemo } from "react";
import { TestimonialColumnContainer } from "./testimonial-column-container";
import Image from "next/image";

export const Testimonials = () => {
  return (
    <div className="relative z-20 py-10 md:py-40">
      <Heading as="h2">Loved by people all over the universe</Heading>
      <Subheading className="text-center max-w-lg mx-auto">
        Every AI is used by millions of people around the globe.Our APIs have
        fan bases and people fight for us over twitter.
      </Subheading>
      <TestimonialGrid />
    </div>
  );
};

interface Testimonial {
  name: string;
  quote: string;
  src: string;
  designation?: string;
}

const testimonials = [
  {
    name: "Faraaz Rahman",
    quote:
      "This AI has completely changed how I work! It's an essential tool for efficiency and creativity.",
    src: "/FR.png", // Ensure FR.png is in the correct folder, like 'public'
    designation: "Software Engineer",
  },
  {
    name: "Nuha Khan",
    quote:
      "I made a soap with the help of AI, it was so easy to use. I'm so glad this happened because it revolutionized my entire business model and production process.",
    src: "/NK.png",
    designation: "Data Analyst",
  },
  {
    name: "Timothy Li",
    quote:
      "This AI has transformed the way I work! It's like having a brilliant assistant who knows exactly what I need before I even ask.",
    src: "/TL.png",
    designation: "Software Engineer",
  },
  {
    name: "Mussadiq Khan",
    quote:
      "Absolutely revolutionary, a game-changer for our industry. It has streamlined our processes and enhanced our productivity dramatically.",
    src: "/MK.png",
    designation: "Cyber Security Engineer",
  },
  {
    name: "Eva Ford",
    quote:
      "I can't imagine going back to how things were before this AI. It has not only improved my work efficiency but also my daily life.",
    src: "/EF.png",
    designation: "UI/UX Designer",
  },
  {
    name: "Malik Anwar",
    quote:
      "It's like having a superpower! This AI tool has given us the ability to do things we never thought were possible in our field.",
    src: "/MA.png",
    designation: "Senior Consultant",
  },
  {
    name: "Muhammad Abdullah",
    quote:
      "The efficiency it brings is unmatched. It's a vital tool that has helped us cut costs and improve our end product significantly.",
    src: "/AB.png",
    designation: "Software Engineer",
  },
  {
    name: "Brandon Wilner",
    quote:
      "A robust solution that fits perfectly into our workflow. It has enhanced our team's capabilities and allowed us to tackle more complex projects.",
    src: "/BW.png",
    designation: "Cyber Security Engineer",
  },
  {
    name: "Maniha Malik",
    quote:
      "It's incredibly intuitive and easy to use. Even those without technical expertise can leverage its power to improve their workflows.",
    src: "/MM.png",
    designation: "Software Engineer",
  },
  {
    name: "Marc Reghina",
    quote:
      "It has saved us countless hours. Highly recommended for anyone looking to enhance their efficiency and productivity.",
    src: "/MR.png",
    designation: "Cyber Security Engineer",
  },
  {
    name: "Roshni Kaur",
    quote:
      "A must-have tool for any professional. It's revolutionized the way we approach problem-solving and decision-making.",
    src: "/RK.png",
    designation: "Software Engineer",
  },
  {
    name: "Connor Madden",
    quote:
      "The results are always impressive. This AI has helped us to not only meet but exceed our performance targets.",
    src: "/CM.png",
    designation: "Performance Manager",
  },
  {
    name: "Kathy Adams",
    quote:
      "It helps us achieve what was once thought impossible. The AI's capabilities are groundbreaking and have opened new avenues for us.",
    src: "https://i.pravatar.cc/150?img=13",
    designation: "Innovation Lead",
  },
  {
    name: "Leo Carter",
    quote:
      "Transformative technology with real impact. It has streamlined our operations and brought unprecedented efficiency to our processes.",
    src: "https://i.pravatar.cc/150?img=14",
    designation: "Technology Strategist",
  },
  {
    name: "Mia Turner",
    quote:
      "It's simply revolutionary! The way it integrates with our existing systems and enhances them is nothing short of miraculous.",
    src: "https://i.pravatar.cc/150?img=15",
    designation: "Systems Integrator",
  },
  {
    name: "Nathan Hill",
    quote:
      "The best investment we've made in years. It's not just a tool; it's a game-changer that has propelled our business forward.",
    src: "https://i.pravatar.cc/150?img=16",
    designation: "Investment Analyst",
  },
  {
    name: "Olivia Scott",
    quote:
      "It consistently exceeds our expectations. Its adaptability and precision make it indispensable for our daily operations.",
    src: "https://i.pravatar.cc/150?img=17",
    designation: "Quality Assurance Manager",
  },
  {
    name: "Peter White",
    quote:
      "A seamless integration into our daily tasks. It has enhanced our productivity and allowed us to focus on more strategic initiatives.",
    src: "https://i.pravatar.cc/150?img=18",
    designation: "Strategic Planner",
  },
  {
    name: "Quinn Taylor",
    quote:
      "It's a game-changer for our business. The insights it provides are invaluable and have driven substantial growth for us.",
    src: "https://i.pravatar.cc/150?img=19",
    designation: "Growth Manager",
  },
  {
    name: "Rachel Black",
    quote:
      "The support team is as impressive as the technology itself. They ensure we maximize the utility of the AI in our operations.",
    src: "https://i.pravatar.cc/150?img=20",
    designation: "Client Support Coordinator",
  },
  {
    name: "Samuel Lee",
    quote:
      "It's the future, now. Adopting this AI has put us years ahead of the competition in terms of operational efficiency and innovation.",
    src: "https://i.pravatar.cc/150?img=21",
    designation: "Futurist",
  },
  {
    name: "Tina Brooks",
    quote:
      "It has completely changed the way we operate. The AI's ability to analyze and optimize our processes is phenomenal.",
    src: "https://i.pravatar.cc/150?img=22",
    designation: "Process Analyst",
  },
];

function Testimonial({
  name,
  quote,
  src,
  designation,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<"figure">, keyof Testimonial> &
  Testimonial) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = [
      "0s",
      "0.1s",
      "0.2s",
      "0.3s",
      "0.4s",
      "0.5s",
    ];
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ];
  }, []);

  const boxStyle = {};
  return (
    <figure
      className={cn(
        "animate-fade-in rounded-3xl bg-transparent p-8 opacity-0 shadow-derek dark:bg-neutral-900",
        className
      )}
      style={{
        animationDelay,
      }}
      {...props}
    >
      <div className="flex flex-col items-start">
        <div className="flex gap-2">
          <Image
            src={src}
            width={150}
            height={150}
            className="h-10 w-10 rounded-full"
            alt={name}
          />
          <div>
            <h3 className="text-sm  font-medium text-neutral-500 dark:text-neutral-300">
              {name}
            </h3>
            <p className="text-sm font-normal text-neutral-500 dark:text-neutral-300">
              {designation}
            </p>
          </div>
        </div>
        <p className="text-base text-muted mt-4 dark:text-muted-dark">
          {quote}
        </p>
      </div>
    </figure>
  );
}

function TestimonialColumn({
  testimonials,
  className,
  containerClassName,
  shift = 0,
}: {
  testimonials: Testimonial[];
  className?: string;
  containerClassName?: (reviewIndex: number) => string;
  shift?: number;
}) {
  return (
    <TestimonialColumnContainer className={cn(className)} shift={shift}>
      {testimonials
        .concat(testimonials)
        .map((testimonial, testimonialIndex) => (
          <Testimonial
            name={testimonial.name}
            quote={testimonial.quote}
            src={testimonial.src}
            designation={testimonial.designation}
            key={testimonialIndex}
            className={containerClassName?.(
              testimonialIndex % testimonials.length
            )}
          />
        ))}
    </TestimonialColumnContainer>
  );
}

function splitArray<T>(array: Array<T>, numParts: number) {
  let result: Array<Array<T>> = [];
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }
  return result;
}

function TestimonialGrid() {
  let columns = splitArray(testimonials, 3);
  let column1 = columns[0];
  let column2 = columns[1];
  let column3 = splitArray(columns[2], 2);
  return (
    <InViewDiv className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
      <TestimonialColumn
        testimonials={[...column1, ...column3.flat(), ...column2]}
        containerClassName={(tIndex) =>
          cn(
            tIndex >= column1.length + column3[0].length && "md:hidden",
            tIndex >= column1.length && "lg:hidden"
          )
        }
        shift={10}
      />
      <TestimonialColumn
        testimonials={[...column2, ...column3[1]]}
        className="hidden md:block"
        containerClassName={(tIndex) =>
          tIndex >= column2.length ? "lg:hidden" : ""
        }
        shift={15}
      />
      <TestimonialColumn
        testimonials={column3.flat()}
        className="hidden lg:block"
        shift={10}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white dark:from-black" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white dark:from-black" />
    </InViewDiv>
  );
}
