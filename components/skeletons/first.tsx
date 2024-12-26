"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";


export const SkeletonOne = () => {
 return (
   <div className="relative flex p-8 gap-10 h-full">
     <div className="w-full md:w-[90%] p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
       <div className="flex flex-1 w-full h-full flex-col space-y-2 opacity-20 dark:opacity-60">
         <UserMessage>
           I'd like interview questions for a software engineering internship. I've attached my resume.
         </UserMessage>
         <AIMessage>
           Great! What's your expertise level and where are you applying?
         </AIMessage>
         <UserMessage>
           It's for an internship at a major tech company.
         </UserMessage>
         <AIMessage>
           Should I include systems design questions?
         </AIMessage>
         <UserMessage>
           Yes, please.
         </UserMessage>
         <AIMessage>
           Perfect! Your mock interview starts soon. Be confident, Asad!
         </AIMessage>
       </div>
     </div>
     <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
     <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
   </div>
 );
};


const UserMessage = ({ children }: { children: React.ReactNode }) => {
 const variants = {
   initial: {
     x: 0,
   },
   animate: {
     x: 5,
     transition: {
       duration: 0.2,
     },
   },
 };
 return (
   <motion.div
     variants={variants}
     className="flex flex-row rounded-2xl p-2 items-start space-x-2 bg-white dark:bg-neutral-900"
   >
     <Image
       src="/SS.png"
       alt="User avatar"
       height="100"
       width="100"
       className="rounded-full h-4 w-4 md:h-10 md:w-10"
     />
     <p className="text-[10px] sm:text-sm text-neutral-500">{children}</p>
   </motion.div>
 );
};


const AIMessage = ({ children }: { children: React.ReactNode }) => {
 const variantsSecond = {
   initial: {
     x: 0,
   },
   animate: {
     x: 10,
     transition: {
       duration: 0.2,
     },
   },
 };
 return (
   <motion.div
     variants={variantsSecond}
     className="flex flex-row rounded-2xl p-2 items-center justify-start space-x-2 bg-white dark:bg-neutral-900"
   >
     <Image
       src="/AR.jpeg"
       alt="AI avatar"
       height="100"
       width="100"
       className="rounded-full h-4 w-4 md:h-10 md:w-10"
     />
     <p className="text-[10px] sm:text-sm text-neutral-500">{children}</p>
   </motion.div>
 );
};








