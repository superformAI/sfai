"use client";

import React, { useState, useEffect } from "react";
import Balancer from "react-wrap-balancer";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Script from "next/script";

// All four Lottie URLs in the desired order
const ANIMATIONS = [
  "https://lottie.host/c7a75cfb-b849-42f6-ab53-d9aec97c2dad/o2pZL3CGQ0.lottie",
  "https://lottie.host/a985a1f1-f2bc-40e1-9cec-a0d86d592966/KmNC0zzZF4.lottie",
  "https://lottie.host/d6eabdc8-7de3-4f15-9031-ace8249bc421/IQr8ONIfFw.lottie",
  "https://lottie.host/588f79ad-58b5-41e6-8abb-14bb47a99709/U91AXTNayP.lottie",
];

export const Hero = () => {
  const router = useRouter();

  const slogans = [
    "Your Future, Our Focus",
    "Create the Career You Desire",
    "Leading You to New Heights",
  ];
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);

  // Index of the currently displayed animation (0..3)
  const [animationIndex, setAnimationIndex] = useState(0);

  useEffect(() => {
    // Rotate slogans every 4 seconds
    const sloganInterval = setInterval(() => {
      setCurrentSloganIndex((prevIndex) => (prevIndex + 1) % slogans.length);
    }, 4000);

    // Cycle animations every 4 seconds in a loop
    const animationInterval = setInterval(() => {
      setAnimationIndex((prevIndex) => (prevIndex + 1) % ANIMATIONS.length);
    }, 4000);

    return () => {
      clearInterval(sloganInterval);
      clearInterval(animationInterval);
    };
  }, [slogans.length]);

  return (
    <div className="flex flex-col min-h-screen pt-20 md:pt-40 relative overflow-hidden">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 1.5,
        }}
        className="text-2xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto text-center mt-6 
                   font-[SF Pro Text,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif]"
      >
        <Balancer>
          {/* "Super" has gradient, "form" is normal, "AI" has gradient */}
          <span className="text-gradient-animation">Super</span>form{" "}
          <span className="text-gradient-animation">AI</span>
        </Balancer>
      </motion.h1>

      {/* Slogan rotation */}
      <div className="relative h-[2.5rem] md:h-[3rem] lg:h-[4rem] flex items-center justify-center overflow-hidden mt-2">
        {slogans.map((slogan, index) => (
          <motion.h2
            key={slogan}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: currentSloganIndex === index ? 1 : 0,
              y: currentSloganIndex === index ? 0 : -20,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="absolute text-xl md:text-3xl lg:text-5xl font-medium max-w-4xl 
                       text-center font-[SF Pro Text,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif]"
          >
            <Balancer>{slogan}</Balancer>
          </motion.h2>
        ))}
      </div>

      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 0.2,
        }}
        className="text-center mt-6 text-base md:text-xl text-muted dark:text-muted-dark max-w-3xl mx-auto relative z-10"
      >
        <Balancer>
          Bringing together career-focused tools, seamlessly integrating modern
          AI to boost your professional journey—all in one platform.
        </Balancer>
      </motion.p>

      {/* Call-to-Action Button */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 0.4,
        }}
        className="flex items-center justify-center mt-6 relative z-10"
      >
        <button
          className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 
                     rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
          onClick={() => router.push("/contact")}
        >
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full 
                           bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] 
                           opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
            <span>Join the Waitlist to be part of early beta access!</span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] 
                          h-px w-[calc(100%-2.25rem)] 
                          bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 
                          transition-opacity duration-500 group-hover:opacity-40" />
        </button>
      </motion.div>

      {/* Lottie Animations: cycle continuously, 4s each */}
      <div className="mt-10 flex justify-center">
        {/* Load the dotlottie script once */}
        <Script
          src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
          type="module"
          strategy="afterInteractive"
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={animationIndex} // re-mounts on index change
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <dotlottie-player
              src={ANIMATIONS[animationIndex]}
              background="transparent"
              speed="1"
              style={{ width: "500px", height: "500px" }}
              loop
              autoplay
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
