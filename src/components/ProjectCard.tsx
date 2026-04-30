"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
  image: string;
}

const ProjectCard = ({ title, description, tags, link, github, image }: ProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group glass-card rounded-3xl overflow-hidden hover-glow"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-md text-[10px] text-highlight font-bold uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
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
