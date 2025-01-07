"use client";
import { stagger, useAnimate } from "framer-motion";
import React, { useState } from "react";

export const SkeletonTwo = () => {
  const [scope, animate] = useAnimate();
  const [animating, setAnimating] = useState(false);

  const handleAnimation = async () => {
    if (animating) return;

    setAnimating(true);
    await animate(
      ".message",
      {
        opacity: [0, 1],
        y: [20, 0],
      },
      {
        delay: stagger(0.5),
      }
    );
    setAnimating(false);
  };

  return (
    <div className="relative h-full w-full mt-4">
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white via-white dark:from-black dark:via-black to-transparent w-full pointer-events-none" />
      <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] h-full z-20">
        <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px] h-full">
          <div className="w-20 rounded-full bg-neutral-200/80 dark:bg-neutral-800/80 mx-auto h-6" />

          <div onMouseEnter={handleAnimation} ref={scope} className="content mt-4 w-[90%] mx-auto">
            {/* Replace all apostrophes with &apos; to pass ESLint */}
            <UserMessage>
              Hello Supey! Or should I call you superform? Can you help me with my upcoming Software Engineer interview!? It&apos;s for a new grad position.
            </UserMessage>
            <AIMessage>
              YES! We got exactly what you need! Before we move forward, how do you feel about your current resume?
            </AIMessage>
            <UserMessage>
              Umm.. I feel okay. Can I get a double check?
            </UserMessage>
            <AIMessage>Yes! Superform can assist you with your resume!</AIMessage>
            <UserMessage>Yay! So what&apos;s next?</UserMessage>
            <AIMessage>
              Let&apos;s make sure you get some interview prep before you are on your way!
            </AIMessage>
            <AIMessage>
              Preparing a plan that&apos;s just right for you.....!
            </AIMessage>
          </div>
        </div>
      </div>
    </div>
  );
};

/** 
 * Helper components 
 */
const UserMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="message bg-neutral-100 dark:bg-neutral-800 dark:text-white text-black p-2 sm:p-4 text-[10px] sm:text-xs my-4 rounded-md">
      {children}
    </div>
  );
};

const AIMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="message bg-black text-white dark:bg-white dark:text-black p-2 sm:p-4 text-[10px] sm:text-xs my-4 rounded-md">
      {children}
    </div>
  );
};
