"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

type LoadingScreenProps = {
  onComplete: () => void;
};

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const delay = 100; // delay before counting starts

    let interval: ReturnType<typeof setInterval> | null = null;
    let completeTimeout: ReturnType<typeof setTimeout> | null = null;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            if (interval) {
              clearInterval(interval);
            }
            completeTimeout = setTimeout(onComplete, 1000); // remove from DOM
            return 100;
          }
          return prev + 1;
        });
      }, 10);
    }, delay);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
      if (completeTimeout) {
        clearTimeout(completeTimeout);
      }
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen flex justify-center items-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.5, delay: 0.5 }} // fade out timing
    >
      <motion.div className="text-6xl font-bold text-primary flex space-x-1">
        {progress
          .toString()
          .split("")
          .map((digit, index) => (
            <motion.span
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              {digit}
            </motion.span>
          ))}
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          %
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
