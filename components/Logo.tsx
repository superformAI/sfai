"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
    >
      <Image
        src="/logos/sf.png"
        alt="Superform AI Logo"
        width={38}  // Increased size
        height={38} // Increased size
        className="h-8 w-8"
      />
      <span className="font-medium text-black dark:text-white">Superform AI</span>
    </Link>
  );
};
