"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github?: string;
}

const ProjectCard = ({ title, description, tags, image, link, github }: ProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group glass-card rounded-3xl overflow-hidden hover-glow"
    >
      <div className="relative h-64 w-full overflow-hidden">
        {/* Placeholder for project image */}
        <div className="absolute inset-0 bg-navy-700 animate-pulse group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-60" />
        
        {/* Project Title overlay when hovered (optional, but let's keep it simple) */}
        <div className="absolute bottom-4 left-6 z-10">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-md text-[10px] text-highlight font-bold uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-text-gray mb-6 line-clamp-2 leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center gap-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-accent hover:text-highlight transition-colors"
          >
            Live Demo <ExternalLink size={16} />
          </a>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-text-gray hover:text-white transition-colors"
            >
              Source <Code2 size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
