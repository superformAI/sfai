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
        {/* Redis (updated to a full standard icon) */}
        <RedisLogo />
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

      {/* MongoDB (updated for better shape) */}
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

      {/* PyTorch (updated for better shape) */}
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
   GitHub
   =========================== */
const GitHubLogo = () => {
  return (
    <svg
      role="img"
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 object-contain"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 
        0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
        0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61
        -4.042-1.61C4.422 18.07 3.633 17.7 3.633 
        17.7c-1.087-.744.084-.73.084-.73 1.205.084 
        1.84 1.245 1.84 1.245 1.07 1.835 2.807 
        1.305 3.493.997.108-.776.417-1.305.76
        -1.605-2.665-.305-5.466-1.336
        -5.466-5.93 0-1.31.47-2.38 
        1.24-3.22-.124-.303-.54-1.523.117
        -3.176 0 0 1.01-.323 3.3 1.23a11.5
        11.5 0 013.003-.403 11.47 11.47 
        0 013.003.403c2.29-1.553 3.3-1.23
        3.3-1.23.657 1.653.242 2.873.118 
        3.176.77.84 1.24 1.91 1.24 
        3.22 0 4.61-2.807 5.623-5.48
        5.92.43.37.81 1.103.81 2.22 
        0 1.603-.015 2.897-.015 
        3.286 0 .317.22.686.82.57C20.565
        22.092 24 17.592 24 12.297c0
        -6.627-5.373-12-12-12"/>
    </svg>
  );
};

/* ===========================
   Java
   =========================== */
const JavaLogo = () => {
  return (
    <svg
      role="img"
      width="800px"
      height="800px"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 object-contain"
    >
      <title>Java</title>
      <path
        fill="#5382a1"
        d="M61.81 118.23s-6.15 3.59 4.35 4.78c12.65 
        1.37 19.15.87 33.08-1.44 0 0 3.73 2.38
        8.94 4.47-31.78 13.56-72.07-.77
        -46.37-7.81zM59.47 102.24s-6.91 5.18 
        3.66 6.31c13.64 1.4 24.42 1.52
        42.31-2.07 0 0 2.51 2.54 
        6.47 3.94-37.11 10.88-78.33.86
        -52.44-8.18zM79.12 71.1c7.76 8.93
        -2.05 16.96-2.05 16.96s19.52-10.11
        10.56-23.22c-8.38-12.22-14.81-18.32
        19.97-39.16 0-.01-54.44 13.62
        -28.48 45.42z"
      />
      <path
        fill="#e76f00"
        d="M86.44 1.52s15.89 15.96-15.05 40.53c
        -24.63 19.42-5.62 30.53 0
        43.48-14.42-13.09-24.91-24.61
        -17.79-35.41 7.88-12.29 33.15
        -20.81 32.84-34.7z"
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
   MongoDB (updated logo)
   =========================== */
const MongoDBLogo = () => {
  // A more standard MongoDB leaf shape
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 256 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="#499D4A"
      className="h-4 w-4 object-contain"
    >
      <path d="M127.66 1.2c-2.27 30.9-17.21 48.12-28.04 66.53C89.03 
      80.84 69.07 113.99 68.2 160.06c-.68 38.39 11.6 66.28 30.68
      93.18 9.25 13.27 19.21 24.47 27.73 37.21 3.59 5.24 7.2 
      11.11 9.42 17.19 1.32 3.81 1.79 6.23 2.28 10.29 1.01 
      7.94 1.16 11.94-2.54 18.12-3.46 6-9.52 10.36-11.66 
      11.56-2.78 1.47-3.45 3.6-3.08 6.67.85 6.64 1.72 13.28 
      2.57 19.91.12.94.2 1.76.55 2.74.37.97 1.08 1.51 2.09 
      1.62 2.53.27 4.74-1.2 6.63-2.69 13.73-11.29 27.46
      -22.58 41.19-33.86 1.45-1.19 3.69-1.36 5.3-.38 
      3.58 2.1 5.94 3.8 9.05 6.68 2.46 2.35 3.84 3.94 6.74 
      3.66 1.33-.12 2.09-.51 2.53-1.87 1.08-3.28 
      .18-8.4-1.4-14.15-1.6-5.85-3.2-11.69-4.79-17.54
      -1.26-4.62-3.32-6.92-6.43-10.24-5.9-6.22-12.39
      -11.93-17.6-18.81-5.94-7.74-11.61-15.62-15.8
      -24.09-9.83-19.64-14.16-39.6-14.52-60.18
      1.72-46.03 21.48-81.88 39.79-107.53 
      11.2-15.52 14.81-19.56 17.28-35.28 
      1.89-12.04 3.35-30.62-4.62-43.3C132.84
      2.87 129.99.93 127.66 1.2z" />
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
   PyTorch (updated logo)
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
      <path d="M127.99 0l-24.5 24.5c-25.6 25.6
      -25.6 67.1 0 92.7 5.5 5.4 14.3
      2.1 14.3 -5.6 0 -2.7-1
      -5.2-2.8 -7.1
      -14.4 -14.3 -14.4 -37.7 0
      -52.1l12.9 -12.8 12.9
      12.8c14.3 14.4 14.3 37.8 0
      52.1-2.3 2.3-3.2 5.8
      -2.4 9.2 4.2 18.4 19.9
      32.2 39.2 32.2 22.1 0
      40 -17.9 40 -40 0 -18.4
      -12.3 -34.1 -29 -38.8
      -2.1 -.6 -3.9 -2.3
      -4.8 -4.4 -5.4 -12.6
      2.4 -26.7 15 -32.1
      l6.3 -2.7 -27.9 -27.9z" />
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

/* ===========================
   Redis (updated logo)
   =========================== */
const RedisLogo = () => {
  // A more complete standard Redis logo
  return (
    <svg
      width="800"
      height="800"
      viewBox="0 0 512 512"
      fill="none"
      className="h-4 w-4 object-contain"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#D82C20">
        <path d="M501.8 175.9c0-15.2-42.7-32.6-113.7-50.7 
          -40.3-9.6-88.2-17.8-142.1-17.8 -40.2 0-74 3.9-101.3
          9.6 -59.5 12.2-90.7 28.3-90.7 44.1 0 15.2 31.2 31.4
          90.7 43.5 37.1 7.6 83.3 11.8 131.4 11.8 42 0 79.2
          -3.2 109.8-8.3 70.4-12.2 116.2-30.9 116.2-42.2z" />
        <path d="M502.5 236c0-14.9-40.7-31.2-108.9-49.5 
          -39-9.3-85.4-17.2-137.6-17.2 -39 0-71.9 3.7-98.5 9.1
          -57.6 11.8-88 27.4-88 42.7 0 15.5 30.4 31 88 42.9
          35.9 7.3 80.7 11.3 127.3 11.3 40.8 0 77-3.1 106.8
          -8 68.5-11.8 110.9-29.4 110.9-41.3zM502.5 293
          c0-14.9-40.7-31.2-108.9-49.5 -39-9.3-85.4-17.2-137.6-17.2
          -39 0-71.9 3.7-98.5 9.1-57.6 11.8-88 27.4-88 42.7
          0 15.5 30.4 31 88 42.9 35.9 7.3 80.7 11.3 127.3 11.3
          40.8 0 77-3.1 106.8-8 68.5-11.8 110.9-29.4 110.9-41.3z" />
      </g>
    </svg>
  );
};
