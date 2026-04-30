"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-navy-900/80 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative flex items-center gap-2 group cursor-pointer"
          onMouseEnter={() => setIsLogoHovered(true)}
          onMouseLeave={() => setIsLogoHovered(false)}
        >
          <div className="relative w-8 h-8 flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full text-highlight transition-all duration-300 group-hover:text-accent"
            >
              {/* Left shape */}
              <motion.path
                animate={{
                  d: isLogoHovered
                    ? "M 20 30 L 50 75 L 50 75"
                    : "M 25 25 L 45 50 L 25 75",
                }}
                transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
              />

              {/* Right shape */}
              <motion.path
                animate={{
                  d: isLogoHovered
                    ? "M 80 30 L 50 75 L 50 75"
                    : "M 75 25 L 55 50 L 75 75",
                }}
                transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
              />
            </svg>
          </div>
          
          <div className="flex items-center">
            <span className="font-bold tracking-tighter text-highlight text-xl whitespace-nowrap">
              Surya Haganta<span className="text-accent">.</span>
            </span>
          </div>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-text-gray hover:text-highlight transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-5 py-2 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent/80 transition-all hover:scale-105 shadow-[0_0_15px_rgba(79,124,255,0.4)]"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-soft"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-navy-800/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-text-soft"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
