"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/container";

const AboutPage = () => {
  return (
    <div className="relative h-full w-full overflow-hidden py-32 md:py-40">
      {/* Backgrounds for light and dark modes */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-950 dark:block hidden">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:hidden">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]" />
      </div>

      <Container className="relative z-10 flex flex-col items-start pb-20">
        {/* Top Section: Left-Aligned Text, Right-Aligned Images */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start w-full">
          {/* Left Side Text */}
          <div className="flex-1 text-left">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Our Journey to Make{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Career Building
              </span>{" "}
              Accessible
            </h1>
            <p className="mt-4 text-lg text-muted max-w-md">
              We started our platform to solve the problems we experienced during our own job searches. Not everyone has the privilege of attending top universities or receiving personalized career guidance. Our mission is to support every student, regardless of background, and provide them with the tools they need to land their dream job.
            </p>
          </div>

          {/* Right Side Images with Hover Effects and Larger Titles */}
          <div className="flex-1 flex flex-col gap-12 items-center relative mt-10 md:mt-0">
            {/* Founder 1 - Asad Rizvi */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex flex-col items-center group"
            >
              <Image
                src="/AR.jpeg"
                alt="Asad Rizvi"
                width={220}
                height={220}
                className="rounded-full transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-bounce-slow"
              />
              <div className="text-center mt-4">
                <p className="text-2xl font-semibold">Asad Rizvi</p>
                <p className="text-lg text-muted">Chief Technology Officer</p>
              </div>
            </motion.div>

            {/* Founder 2 - Sherman Singh */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex flex-col items-center group"
            >
              <Image
                src="/SS.png"
                alt="Sherman Singh"
                width={220}
                height={220}
                className="rounded-full transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-bounce-slow"
              />
              <div className="text-center mt-4">
                <p className="text-2xl font-semibold">Sherman Singh</p>
                <p className="text-lg text-muted">Chief Executive Officer</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Expanded Below Section: Why We Built This Platform */}
        <div className="mt-16 max-w-5xl text-left mx-auto">
          <h2 className="text-2xl font-semibold">Why We Built This Platform</h2>
          <p className="mt-4 text-lg text-muted">
            Our goal is to create a platform that democratizes career opportunities for students everywhere. We know how hard it can be to navigate the job market, especially if you’re coming from a non-traditional background. My co-founder and I went through this journey ourselves: not knowing how to build a strong resume, how to leverage AI tools effectively, or how to project confidence in an interview. As first-generation immigrants, we didn’t have mentors to guide us or family connections to help us land our first roles. We want to change that for others.
            <br /><br />
            Think of us as your career companion, here to SUPERCHARGE job hunting, make it more transparent, and reduce the stress. We’re building features that cover everything from skill building and resume creation to AI-driven interview prep and job matching—all tailored to help you reach your aspirations. Our mission is to make sure that no one, regardless of where they start, has to go through this journey alone.
          </p>
        </div>

        {/* Privacy and Data Transparency Note */}
        <div className="mt-12 max-w-5xl text-left mx-auto">
          <h3 className="text-2xl font-semibold">A Note on Privacy</h3>
          <p className="mt-4 text-lg text-muted">
            At our core, we&apos;re committed to respecting your privacy. We believe in transparency and control over your personal information. We use your data only to enhance your experience on our platform, providing personalized job suggestions, skill-building tools, and relevant career guidance. Your data is yours, and we’ll always let you decide how it’s used.
          </p>
        </div>

        {/* Mission Call-to-Action with Gradient Text */}
        <div className="mt-16 text-center">
          <p className="text-xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Join us in making career growth accessible to everyone.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
