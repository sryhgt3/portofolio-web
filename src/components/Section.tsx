"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
}

const Section = ({ children, id, className, title, subtitle, centered = false }: SectionProps) => {
  return (
    <section id={id} className={cn("py-24 px-6", className)}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className={cn("mb-16", centered ? "text-center" : "text-left")}>
            {subtitle && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4 block"
              >
                {subtitle}
              </motion.span>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white tracking-tight"
              >
                {title}
              </motion.h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
