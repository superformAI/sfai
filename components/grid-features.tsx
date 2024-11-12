import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export const GridFeatures = () => {
  const features = [
    {
      title: "Crafting the Perfect Resume Feels Overwhelming?",
      description: "Empower your professional profile with guidance tailored for engineers, developers, and dreamers alike.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Struggling to Write a Standout Cover Letter?",
      description: "Get support that makes cover letter writing as simple and impactful as possible.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Worried About ATS Compatibility?",
      description: "Ensure your application stands out with a system that works for you, not against you.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Need Help Learning Complex Concepts?",
      description: "Receive personalized guidance that makes learning technical skills manageable and effective.",
      icon: <IconCloud />,
    },
    {
      title: "Not Sure How to Reach Out to Potential Employers?",
      description: "Access thoughtfully crafted templates to make connections and opportunities feel within reach.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Your LinkedIn Profile Needs a Refresh?",
      description: "Transform your profile to better reflect your skills, experience, and potential.",
      icon: <IconHelp />,
    },
    {
      title: "Looking for Personalized Career Guidance?",
      description: "Connect with experienced advisors who can help you navigate your career path.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Having Trouble Finding the Right Job Opportunities?",
      description: "Discover roles that align with your goals, all in one place.",
      icon: <IconHeart />,
    },
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200" />
        <span className="group-hover:translate-x-2 transition duration-200 inline-block">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted dark:text-muted-dark max-w-xs mx-auto relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
