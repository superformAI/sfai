"use client";

import React, { useState, useEffect } from "react";
import Balancer from "react-wrap-balancer";
import { Button } from "./button";
import { HiArrowRight } from "react-icons/hi2";
import { Badge } from "./badge";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Link } from "next-view-transitions";

export const Hero = () => {
  const router = useRouter();
  const slogans = [
    "Your Future, Our Focus",
    "Create the Career You Desire",
    "Leading You to New Heights",
  ];
  const [currentSlogan, setCurrentSlogan] = useState(slogans[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => {
        const currentIndex = slogans.indexOf(prev);
        const nextIndex = (currentIndex + 1) % slogans.length;
        return slogans[nextIndex];
      });
    }, 4000); // Change slogan every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen pt-20 md:pt-40 relative overflow-hidden">
      <motion.div
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
        className="flex justify-center"
      >
        <Badge onClick={() => router.push("/blog/top-5-llm-of-all-time")}>
          Join the Waitlist to be part of early beta access!
        </Badge>
      </motion.div>
      <motion.h1
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          ease: "easeInOut",
          duration: 1.5,
        }}
        className="text-2xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto text-center mt-6 font-[SF Pro Text,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif]"
      >
        <Balancer>Superform AI</Balancer>
      </motion.h1>
      <AnimatePresence mode="wait">
        <motion.h2
          key={currentSlogan}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="text-xl md:text-3xl lg:text-5xl font-medium max-w-4xl mx-auto text-center mt-2 font-[SF Pro Text,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif]"
        >
          <Balancer>{currentSlogan}</Balancer>
        </motion.h2>
      </AnimatePresence>
      <motion.p
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 0.2,
        }}
        className="text-center mt-6 text-base md:text-xl text-muted dark:text-muted-dark max-w-3xl mx-auto relative z-10"
      >
        <Balancer>
        Superform AI brings together career-focused tools, seamlessly integrating modern AI to boost your professional journey—all in one platform..
        </Balancer>
      </motion.p>
      <motion.div
        initial={{
          y: 80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 0.4,
        }}
        className="flex items-center gap-4 justify-center mt-6 relative z-10"
      >
        <Button>Get started</Button>
        <Button
          variant="simple"
          as={Link}
          href="/contact"
          className="flex space-x-2 items-center group"
        >
          <span>Contact us</span>
          <HiArrowRight className="text-muted group-hover:translate-x-1 stroke-[1px] h-3 w-3 transition-transform duration-200 dark:text-muted-dark" />
        </Button>
      </motion.div>
      <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] mt-20 relative">
        <div className="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent via-white to-white dark:via-black/50 dark:to-black scale-[1.1] pointer-events-none" />
        <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px]">
          <Image
            src="/header.png"
            alt="header"
            width={1920}
            height={1080}
            className="rounded-[20px]"
          />
        </div>
      </div>
    </div>
  );
};
