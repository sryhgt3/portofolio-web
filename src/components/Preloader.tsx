"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timers = [
      setTimeout(() => setStep(1), 1200),
      setTimeout(() => setStep(2), 2600),
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = "";
      }, 3200),
    ];

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0f1c]"
        >
          <div className="relative flex items-center justify-center h-48 w-full">
            <AnimatePresence mode="wait">
              {step < 2 && (
                <motion.svg
                  key="logo"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-32 h-32 md:w-40 md:h-40 text-white drop-shadow-[0_0_25px_rgba(79,124,255,0.5)]"
                  initial={{ opacity: 0, scale: 0.6, filter: "blur(8px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{
                    opacity: 0,
                    scale: 3,
                    filter: "blur(25px)",
                    transition: { duration: 0.7, ease: "easeOut" },
                  }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                >
                  {/* Left shape */}
                  <motion.path
                    initial={{ d: "M 25 25 L 45 50 L 25 75" }}
                    animate={{
                      d:
                        step === 0
                          ? "M 25 25 L 45 50 L 25 75"
                          : "M 25 25 L 37.5 50 L 50 75",
                    }}
                    transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
                  />

                  {/* Right shape */}
                  <motion.path
                    initial={{ d: "M 75 25 L 55 50 L 75 75" }}
                    animate={{
                      d:
                        step === 0
                          ? "M 75 25 L 55 50 L 75 75"
                          : "M 75 25 L 62.5 50 L 50 75",
                    }}
                    transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;