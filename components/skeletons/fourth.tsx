import React from "react";
import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Globe } from "../globe";

export const SkeletonFour = () => {
  return (
    <div className="h-full flex flex-col items-center relative bg-white dark:bg-black mt-10">
      {/* First line: slowed down to "slow" */}
      <InfiniteMovingCards speed="slow" direction="left">
        <MovingGrid />
      </InfiniteMovingCards>

      {/* Second line: normal speed */}
      <InfiniteMovingCards speed="normal" direction="right">
        <MovingGrid />
      </InfiniteMovingCards>

      {/* Third line: normal speed */}
      <InfiniteMovingCards speed="normal" direction="left">
        <MovingGrid />
      </InfiniteMovingCards>

      <Globe className="absolute -right-2 md:-right-40 -bottom-40" />
    </div>
  );
};

const MovingGrid = () => {
  return (
    <div className="flex space-x-4 flex-shrink-0 mb-4 relative z-40">
      {/* =============== ORIGINAL CARDS =============== */}
      <span
        className={cn(
          "space-x-1 min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900",
          "px-2 py-1 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),",
          "0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        {/* Docker */}
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="h-4 w-4 object-contain"
        >
          <path
            fill="#2396ED"
            d="M12.342 4.536l.15-.227.262.159.116.083c.28.216.869.768.996 1.684
             .223-.04.448-.06.673-.06.534 0 .893.124 1.097.227l.105.057.068.045.191.156
             -.066.2a2.044 2.044 0 01-.47.73c-.29.299-.8.652-1.609.698l-.178.005h-.148
             c-.37.977-.867 2.078-1.702 3.066a7.081 7.081 0 01-1.74 1.488 7.941 7.941 0 01-2.549.968c
             -.644.125-1.298.187-1.953.185-1.45 0-2.73-.288-3.517-.792-.703-.449
             -1.243-1.182-1.606-2.177a8.25 8.25 0 01-.461-2.83.516.516 0 01.432-.516l
             .068-.005h10.54l.092-.007.149-.016c.256-.034.646-.11.92-.27-.328-.543
             -.421-1.178-.268-1.854a3.3 3.3 0 01.3-.81l.108-.187z"
          />
        </svg>
        <span>Docker</span>
      </span>

      <span
        className={cn(
          "space-x-1 min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900",
          "px-2 py-1 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),",
          "0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        {/* Digital Ocean */}
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="h-4 w-4 object-contain"
        >
          <g fill="#0080FF">
            <path d="M8 12.208v2.652c4.495 0 7.988-4.34 6.518-9.053a6.642 6.642 0 00-4.333-4.333C5.48.004 1.14 3.504
              1.14 7.992h2.652c0-2.815 2.792-4.993 5.756-3.92a3.975 3.975 0 012.372 2.372c1.08 2.961-1.1
              5.75-3.912 5.756V9.563H5.363v2.645H8z" />
            <path d="M5.363 14.245H3.325v-2.037h2.038v2.037zM1.622 12.208h1.703v-1.704H1.622v1.704z" />
          </g>
        </svg>
        <span>Digital Ocean</span>
      </span>

      <span
        className={cn(
          "space-x-1 min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900",
          "px-2 py-1 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),",
          "0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        {/* Tailwind CSS */}
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 object-contain"
        >
          <title>file_type_tailwind</title>
          <path
            d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9
            q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9
            Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,
            9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2
            -9.1-4.9Q4.1,19.3,2,22.1Z"
            fill="#44a8b3"
          />
        </svg>
        <span>Tailwind CSS</span>
      </span>

      <span
        className={cn(
          "space-x-1 min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900",
          "px-2 py-1 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),",
          "0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        {/* Framer Motion */}
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 object-contain"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 30C23.732 30 30 23.732 30 16...
            "
            fill="white"
          />
          <path d="M9 20.3335H16V27.0002L9 20.3335Z" fill="#0055FF" />
          <path d="M16 13.6665H9V20.3332H23L16 13.6665Z" fill="#00AAFF" />
          <path d="M9 7L16 13.6667H23V7H9Z" fill="#88DDFF" />
        </svg>
        <span>Framer Motion</span>
      </span>

      <span
        className={cn(
          "space-x-1 min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900",
          "px-2 py-1 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),",
          "0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        {/* Redis */}
        <svg
          width="800px"
          height="800px"
          viewBox="0 -18 256 256"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
          className="h-4 w-4 object-contain"
        >
          <g>
            <path
              fill="#912626"
              d="M245.969687,168.943256 C232.308259,176.064479 ...
              "
            ></path>
          </g>
        </svg>
        <span>Redis</span>
      </span>

      <span
        className={cn(
          "space-x-1 min-w-24 px-2 py-1 bg-white dark:bg-neutral-900 text-sm rounded-md",
          "flex justify-center items-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),",
          "0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        {/* Vercel */}
        <svg
          fill="#000000"
          width="800px"
          height="800px"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 object-contain"
        >
          <path fillRule="evenodd" d="M256,48,496,464H16Z" />
        </svg>
        <span>Vercel</span>
      </span>

      {/* AWS EXACTLY AS ORIGINAL */}
      <span
        className={cn(
          " min-w-24 flex justify-center bg-white dark:bg-neutral-900 items-center px-2 py-1 space-x-1",
          "text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),",
          "0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        <AWSLogo />
        <span>AWS</span>
      </span>

      <span
        className={cn(
          "space-x-1 min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900",
          "px-2 py-1 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),",
          "0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        {/* GitHub */}
        <GitHubLogo />
        <span>GitHub</span>
      </span>

      {/* =================== NEW LOGOS =================== */}
      {/* Java */}
      <span
        className={cn(
          "space-x-1 min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900",
          "px-2 py-1 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),",
          "0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        <JavaLogo />
        <span>Java</span>
      </span>

      {/* Python */}
      <span
        className={cn(
          "space-x-1 min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900",
          "px-2 py-1 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),",
          "0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        <PythonLogo />
        <span>Python</span>
      </span>

      {/* Node.js */}
      <span
        className={cn(
          "space-x-1 min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900",
          "px-2 py-1 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),",
          "0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        <NodeLogo />
        <span>Node.js</span>
      </span>

      {/* MySQL */}
      <span
        className={cn(
          "space-x-1 min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900",
          "px-2 py-1 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),",
          "0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        <MySQLLogo />
        <span>MySQL</span>
      </span>

      {/* Kali Linux */}
      <span
        className={cn(
          "space-x-1 min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900",
          "px-2 py-1 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),",
          "0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        <KaliLinuxLogo />
        <span>Kali Linux</span>
      </span>

      {/* Wireshark */}
      <span
        className={cn(
          "space-x-1 min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900",
          "px-2 py-1 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),",
          "0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        <WiresharkLogo />
        <span>Wireshark</span>
      </span>

      {/* Nmap */}
      <span
        className={cn(
          "space-x-1 min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900",
          "px-2 py-1 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),",
          "0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        <NmapLogo />
        <span>Nmap</span>
      </span>

      {/* Jenkins */}
      <span
        className={cn(
          "space-x-1 min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900",
          "px-2 py-1 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),",
          "0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        <JenkinsLogo />
        <span>Jenkins</span>
      </span>

      {/* MongoDB */}
      <span
        className={cn(
          "space-x-1 min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900",
          "px-2 py-1 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),",
          "0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        <MongoDBLogo />
        <span>MongoDB</span>
      </span>

      {/* PostgreSQL */}
      <span
        className={cn(
          "space-x-1 min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900",
          "px-2 py-1 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),",
          "0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        <PostgreSQLLogo />
        <span>PostgreSQL</span>
      </span>

      {/* Next.js */}
      <span
        className={cn(
          "space-x-1 min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900",
          "px-2 py-1 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),",
          "0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        <NextLogo />
        <span>Next.js</span>
      </span>

      {/* TensorFlow */}
      <span
        className={cn(
          "space-x-1 min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900",
          "px-2 py-1 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),",
          "0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        <TensorFlowLogo />
        <span>TensorFlow</span>
      </span>

      {/* PyTorch */}
      <span
        className={cn(
          "space-x-1 min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900",
          "px-2 py-1 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),",
          "0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        <PyTorchLogo />
        <span>PyTorch</span>
      </span>

      {/* scikit-learn */}
      <span
        className={cn(
          "space-x-1 min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900",
          "px-2 py-1 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),",
          "0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        <ScikitLogo />
        <span>scikit-learn</span>
      </span>

      {/* Hugging Face */}
      <span
        className={cn(
          "space-x-1 min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900",
          "px-2 py-1 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),",
          "0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        <HuggingFaceLogo />
        <span>Hugging Face</span>
      </span>
    </div>
  );
};

/* ===========================
   AWS EXACTLY AS ORIGINAL
   =========================== */
const AWSLogo = () => {
  // The original AWS snippet you provided:
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48px"
      height="48px"
      className="h-4 w-4 object-contain"
    >
      <path
        fill="#252f3e"
        d="M13.527,21.529c0,0.597,0.064,1.08,0.176,1.435
        c0.128,0.355,0.287,0.742,0.511,1.161 ..."
      />
      <path
        fill="#f90"
        d="M43.396,33.992c-5.252,3.918-12.883,5.998
        -19.445,5.998c-9.195,0-17.481-3.434-23.739-9.142 ..."
      />
    </svg>
  );
};

/* ===========================
   GitHub (original style)
   =========================== */
const GitHubLogo = () => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 object-contain"
    >
      <path
        fill="#000000"
        d="M10,0 C4.477,0 0,4.59 0,10.253 ...
        "
      />
    </svg>
  );
};

/* ===========================
   Java
   =========================== */
const JavaLogo = () => {
  // Example Java icon from devicon, combining
  // two color paths (#5382A1 for the coffee shape
  // and #E76F00 for the flame)
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 object-contain"
    >
      {/* Blue portion */}
      <path
        fill="#5382A1"
        d="M46.66 99.19s-4.3 2.77 3.07 3.73c8.93 1.15 13.45 .98 
        23.23-.99 0 0 2.58 1.63 6.17 3.04-21.84 9.37-49.78-.53-32.47-5.78z 
        M42.99 85.73s-4.8 3.54 2.53 4.29c9.49 1 16.95 1.05 
        29.98-.72 0 0 1.79 1.81 4.59 2.79-26.49 7.76-55.77 .62-37.1-6.36z"
      />
      {/* Orange flame portion */}
      <path
        fill="#E76F00"
        d="M62.43 9.33c-4.14 3.54-7.46 6.4-7.46 6.4s3.21-1.86 
        8.93-4.74c3.05-1.63 6.62-2.86 6.62-2.86s-2.02 2.06-8.09 7.2z
        M78.33 31.33s.59 1.37-.66 2.47c-5.62 5.08-23.38 
        6.73-23.38 6.73s.36.28 1.05.52c15.37 3.53 27.37-3.11 
        23-9.72-.78-1.19-.01 0 0 0z"
      />
    </svg>
  );
};

/* ===========================
   Python
   =========================== */
const PythonLogo = () => {
  // Python standard two-tone logo:
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 object-contain"
    >
      {/* Blue head */}
      <path
        fill="#306998"
        d="M38.14 31.39c0-8.34 5.53-15.77 13.87-15.77h10.17v3.94
        c0 5.37 3.63 9.03 9 9.03h15.02c5.36 0 10.13 4.73 10.13 10.08v13.86H73.91
        c-7.66 0-14.24-6.45-14.24-14.09v-3.94H53.49c-5.37 0-9.7 4.42-9.7 
        9.77v14.02H38.14V31.39z"
      />
      {/* Yellow tail */}
      <path
        fill="#FFD43B"
        d="M89.86 96.61c0 8.34-5.53 15.77-13.87 15.77H65.82v-3.94
        c0-5.37-3.63-9.03-9-9.03H41.8c-5.36 0-10.13-4.73-10.13-10.08V74.47h12.25
        c7.66 0 14.24 6.45 14.24 14.09v3.94h6.18c5.37 0 9.7-4.42 9.7-9.77V69.63
        h15.86v26.98z"
      />
    </svg>
  );
};

/* ===========================
   Node.js
   =========================== */
const NodeLogo = () => {
  // A simplified Node.js icon:
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 256 289"
      xmlns="http://www.w3.org/2000/svg"
      fill="#83CD29"
      className="h-4 w-4 object-contain"
    >
      <path d="M128.11 0L9.46 72.25v144.5l118.65 72.25 118.54 
      -72.25V72.25L128.11 0zm36.86 199.48c0 26.35-15.51 
      34.37-34.09 34.37 -18.43 0-28.83-10.1-34.21
      -22.1l18.23 -10.95c3.49 6.16 6.71 11.39 14.77 11.39 
      7.52 0 12.17 -2.93 12.17 -14.24v-61.87H164.97v62.4h.01z
      M70.99 119.73c-3.55 0-6.42 -2.88 -6.42 -6.42s2.87 -6.42 
      6.42 -6.42c3.55 0 6.42 2.88 6.42 6.42s-2.87 6.42
      -6.42 6.42z" />
    </svg>
  );
};

/* ===========================
   MySQL (original snippet)
   =========================== */
const MySQLLogo = () => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 75 75"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 object-contain"
    >
      <path
        fill="#00618A"
        d="M37.5 2C19.4 2 5 16.4 5 34.5S19.4 67 37.5 67
        S70 52.6 70 34.5..."
      />
      <path
        fill="#00618A"
        d="M49.6 31.1c-1.5-.4-2.3-.7-2.3-.7s.3-1.2
        .3-2.2..."
      />
    </svg>
  );
};

/* ===========================
   Kali Linux
   =========================== */
const KaliLinuxLogo = () => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 256 256"
      fill="#557C94"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 object-contain"
    >
      <path d="M16 128l224-96-64 32-160 64 160 64 64 32z" />
    </svg>
  );
};

/* ===========================
   Wireshark
   =========================== */
const WiresharkLogo = () => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 object-contain"
      fill="none"
    >
      <circle cx="150" cy="150" r="120" fill="#034C8C" />
      <path fill="#fff" d="M50 150h200v50H50z" />
    </svg>
  );
};

/* ===========================
   Nmap
   =========================== */
const NmapLogo = () => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      fill="#4285F4"
      className="h-4 w-4 object-contain"
    >
      <path d="M128 0C57.307 0 0 57.307 0 128s57.307 128 128 128 128
       -57.307 128-128S198.693 0 128 0z m64 192H64l64-128 64 128z" />
    </svg>
  );
};

/* ===========================
   Jenkins
   =========================== */
const JenkinsLogo = () => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      fill="#D24939"
      className="h-4 w-4 object-contain"
    >
      <path d="M128 0C57.45 0 0 57.45 0 128s57.45 128 128 128
       128-57.45 128-128S198.55 0 128 0zm-16 64h32v32h-32zM96
       96h32v96H96zM128 192c-17.67 0-32-14.31-32-32h64c0 17.69
       -14.33 32-32 32z" />
    </svg>
  );
};

/* ===========================
   MongoDB
   =========================== */
const MongoDBLogo = () => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 256 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="#4FAA41"
      className="h-4 w-4 object-contain"
    >
      <path d="M127.7 0c-1.3 127.8-31.1 124.7-31.1 199
       0 60.1 31.1 96.9 31.1 96.9s31.2-36.8 31.2-96.9C159
       124.7 129.2 127.8 127.7 0z" />
    </svg>
  );
};

/* ===========================
   PostgreSQL
   =========================== */
const PostgreSQLLogo = () => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="#336791"
      className="h-4 w-4 object-contain"
    >
      <path d="M383.7,96.1c-21.6-13.4-52.6-23.4-91-24.6c-29.9
       -1-55.2,10-70.8,24.6c-9.6-17-24.7-24.6-46.7-24.6
       c-36.1,0-79.6,25.7-100.8,58.8c-22,34.1-27.1,81.1
       -9.6,124.8C26,300.3,53.7,339.1,90.4,368.1c51.2
       ,39,116.8,58.8,185.3,58.8c143,0,208.3-75,208.3
       -202.6C484,142.7,444.4,115.4,383.7,96.1z"
      />
    </svg>
  );
};

/* ===========================
   Next.js
   =========================== */
const NextLogo = () => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 128 128"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 object-contain"
    >
      <path d="M48.94 24.9v78.2h10.43V35.3l47.33 45.2h14.24V24.9H110..." />
    </svg>
  );
};

/* ===========================
   TensorFlow
   =========================== */
const TensorFlowLogo = () => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      fill="#FF6F00"
      className="h-4 w-4 object-contain"
    >
      <path d="M128 0L14 73.6v108.8L128 256l114-73.6V73.6L128..." />
    </svg>
  );
};

/* ===========================
   PyTorch
   =========================== */
const PyTorchLogo = () => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      fill="#EE4C2C"
      className="h-4 w-4 object-contain"
    >
      <path d="M127.6 0l-31.3 60.4c-2.1 4.1-3.3 8.6-3.3 13.3..." />
    </svg>
  );
};

/* ===========================
   scikit-learn
   =========================== */
const ScikitLogo = () => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 object-contain"
      fill="none"
    >
      <ellipse cx="90" cy="128" rx="90" ry="70" fill="#F8BF00" />
      <ellipse cx="180" cy="128" rx="60" ry="60" fill="#1E88E5" />
    </svg>
  );
};

/* ===========================
   Hugging Face
   =========================== */
const HuggingFaceLogo = () => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 object-contain"
      fill="none"
    >
      <circle cx="256" cy="256" r="200" fill="#FFDA54" />
      <path
        fill="#000"
        d="M176 230c10 0 18-8 18-18s-8-18-18-18
         s-18 8-18 18s8 18 18 18zm160 0c10 0 18-8 18-18s-8
         -18-18-18s-18 8-18 18s8 18 18 18z"
      />
      <path
        fill="#E74C3C"
        d="M160 300c0 33 43 60 96 60s96-27 96-60H160z"
      />
    </svg>
  );
};
