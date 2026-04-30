"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

import Preloader from "@/components/Preloader";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Globe, 
  Layers, 
  MessageSquare, 
  Zap,
  LayoutGrid
  } from "lucide-react";
const projects = [
  {
    title: "EcoSphere AI",
    description: "An AI-powered environmental monitoring platform that predicts carbon footprint trends using real-time data sensors and machine learning models.",
    tags: ["Next.js", "Python", "TensorFlow", "Tailwind"],
    link: "#",
    github: "#",
    image: "/images/project-dummy-1.png", // Added dummy image
  },
  {
    title: "Nexus Dashboard",
    description: "Enterprise-grade analytics dashboard with complex data visualization, real-time collaboration features, and highly customizable widget systems.",
    tags: ["React", "TypeScript", "D3.js", "Supabase"],
    link: "#",
    github: "#",
    image: "/images/project-dummy-2.png", // Added dummy image
  },
  {
    title: "Vortex eCommerce",
    description: "A high-performance headless commerce engine with lightning-fast search, dynamic filtering, and seamless multi-currency support.",
    tags: ["Shopify", "GraphQL", "Node.js", "Redis"],
    link: "#",
    github: "#",
    image: "/images/project-dummy-3.png", // Added dummy image
  },
];

const skills = [
  { name: "Frontend Development", icon: LayoutGrid, desc: "ReactJs, TypeScript, Next.js, Tailwind" },
  { name: "Backend Development", icon: Cpu, desc: "FastAPI, PHP, SQL, Node.js" },
  { name: "AI Engineering", icon: Zap, desc: "System internal, User-based needs" },
  { name: "Infrastructure", icon: Globe, desc: "Docker, Server Management, SQL" },
];

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Preloader />
      <Navbar />
      
      <Hero />

      {/* About Section */}
      <Section id="about" subtitle="Expertise" title="Fullstack Programmer & AI Engineer">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-text-gray/80 leading-relaxed">
              I am a Fullstack Programmer born in 2003 and a graduate of Telkom University Purwokerto, 
              completing my studies on time with Cum Laude honors and a 3.76 GPA.
            </p>
            <p className="text-text-gray/80 leading-relaxed">
              I have a strong foundation in web development, design, and database management. 
              I am proficient in using ReactJs, TypeScript, PHP, SQL, Docker, Server, and FastAPI 
              to build robust web-based applications.
            </p>
            <p className="text-text-gray/80 leading-relaxed">
              With experience in various projects since my college years, I am currently an 
              AI Engineer at Java Super Food, focusing on developing internal systems tailored to user needs. 
              I am meticulous, a fast learner, and thrive in collaborative team environments.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-highlight font-medium">
                <Zap size={20} /> Fast Learner
              </div>
              <div className="flex items-center gap-2 text-highlight font-medium">
                <Layers size={20} /> Collaborative Team Player
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 glass-card rounded-2xl"
              >
                <skill.icon className="text-accent mb-4" size={32} />
                <h4 className="font-bold text-white mb-2">{skill.name}</h4>
                <p className="text-xs text-text-gray">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" subtitle="Selected Works" title="Featured Projects" centered>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <button className="px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all">
            View All Projects
          </button>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" subtitle="Get in touch" title="Let's build something extraordinary." centered className="bg-navy-800/30">
        <div className="max-w-2xl mx-auto glass-card p-10 rounded-[2rem] text-center">
          <MessageSquare size={48} className="text-accent mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Start a conversation</h3>
          <p className="text-text-gray mb-8">
            Whether you have a specific project in mind or just want to explore possibilities, 
            I&apos;m always open to discussing new ideas.
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-block px-10 py-4 rounded-full bg-accent text-white font-bold text-lg hover:bg-accent/80 transition-all hover:scale-105 shadow-xl"
          >
            Send an Email
          </a>
        </div>
      </Section>



      {/* Footer */}
      <footer className="py-12 border-t border-white/10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:row items-center justify-between gap-8">
          <div className="text-xl font-bold tracking-tighter text-white">
            Surya Haganta<span className="text-accent">.</span>
          </div>
          <div className="text-sm text-text-gray">
            © 2026 Surya Haganta. Built with Next.js & Tailwind.
          </div>
          <div className="flex gap-6">
            {["Twitter", "GitHub", "LinkedIn", "Dribbble"].map((social) => (
              <a key={social} href="#" className="text-sm text-text-gray hover:text-white transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
