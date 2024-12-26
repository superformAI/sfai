import Link from "next/link";
import React from "react";
import { Logo } from "./Logo";

export const Footer = () => {
  const links = [
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  const socials = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/superformai/posts/?feedView=all",
    },
  ];

  return (
    <div className="relative">
      <div className="border-t border-neutral-100 dark:border-neutral-800 px-8 pt-20 pb-32 relative bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto text-sm text-neutral-500 dark:text-neutral-400 flex sm:flex-row flex-col justify-between items-start">
          <div>
            <div className="mr-4 md:flex mb-4">
              <Logo />
            </div>
            <div>Copyright &copy; 2024 Superform AI</div>
            <div className="mt-2">All rights reserved</div>
          </div>
          <div className="grid grid-cols-2 gap-10 items-start mt-10 md:mt-0">
            <div className="flex justify-center space-y-4 flex-col mt-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex justify-center space-y-4 flex-col mt-4">
              {socials.map((link) => (
                <Link
                  key={link.name}
                  className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-4xl md:text-7xl lg:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">
        Superform AI
      </p>
    </div>
  );
};
