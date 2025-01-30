"use client";

import { useState } from "react";
import { motion } from "motion/react";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";

export default function LoadingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Header />
          {children}
        </motion.div>
      )}
    </>
  );
}
