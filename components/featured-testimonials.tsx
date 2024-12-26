"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Faraaz Rahman",
    designation: "Software Engineer",
    image: "/FR.png", // Same path as your avatar image
  },
  {
    id: 2,
    name: "Eva Ford",
    designation: "UI/UX Designer",
    image:
      "/EF.png",
  },
  {
    id: 3,
    name: "Connor Madden",
    designation: "Technical Recruiter",
    image:
      "/CM.png",
  },
  {
    id: 4,
    name: "Maniha Malik",
    designation: "Technical Program Manager",
    image:
      "/MM.png",
  },
  {
    id: 5,
    name: "Mussadiq Khan",
    designation: "Cyber Security Engineer",
    image:
      "/MK.png",
  },
  {
    id: 6,
    name: "Timothy Li",
    designation: "Software Engineer",
    image:
      "/TL.png",
  },
];

export function FeaturedTestimonials() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
