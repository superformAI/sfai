"use client";


import React from "react";
import Script from "next/script";


export const SkeletonOne = () => {
 return (
   <>
     {/* Load the dotlottie-player script */}
     <Script
       src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
       type="module"
     />


     <div className="relative flex p-8 gap-10 h-full">
       {/*
         Reduced shadow from shadow-2xl -> shadow-md
         Reduced padding from p-5 -> p-3
       */}
       <div className="w-full md:w-[90%] p-3 mx-auto bg-white dark:bg-neutral-900 shadow-md group h-full flex items-center justify-center">
         <dotlottie-player
           src="https://lottie.host/b57d7b88-7383-4e4c-8545-b770b1918bdb/Q4sO0skdHS.lottie"
           background="transparent"
           speed="1"
           style={{ width: "500px", height: "500px" }} // Increased size here
           loop
           autoplay
         ></dotlottie-player>
       </div>


       {/* Gradients remain unchanged */}
       <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
       <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
     </div>
   </>
 );
};
